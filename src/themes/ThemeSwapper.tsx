import { useState } from 'react';
import { MenuItem, IconButton } from '@mui/material';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { useTheme } from './ThemeContext';
import { Menu } from '@mui/material';
import { ToggleThemeButton } from 'react-admin';


export function ThemeSwapper() {
    const { themeOptions, setTheme, theme } = useTheme(); 

    const handleChange = (newTheme: string) => {
        setTheme(themeOptions[newTheme]);
        handleClose();
    };

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton onClick={handleClick} color="inherit">
                <ColorLensIcon />
            </IconButton>
            <ToggleThemeButton /> 
            <Menu open={open} onClose={handleClose} anchorEl={anchorEl}>
                {Object.keys(themeOptions).map((themeKey:any) => (
                    <MenuItem
                        key={themeKey}
                        value={themeKey}
                        onClick={() => handleChange(themeKey)}
                        style={{
                            backgroundColor: themeOptions[themeKey] === theme ? '#ddd' : 'transparent', 
                            fontWeight: themeOptions[themeKey] === theme ? 'bold' : 'normal', 
                        }}
                    >
                        {themeKey}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
}
