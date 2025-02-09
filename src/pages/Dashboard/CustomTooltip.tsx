import { Box, Typography } from '@mui/material';




const CustomTooltip = ({ active, payload, label}:any) => {
  if (active && payload && payload.length) {
    return (
      <Box sx={{ 
        bgcolor: 'background.paper',
        p: 1.5,
        border: 1,
        borderColor: 'divider',
        borderRadius: 1,
        boxShadow: 1
      }}>
        <Typography variant="body2" color="text.primary" fontWeight="500">
          {label}
        </Typography>
        {payload.map((entry:any, index:any) => (
          <Typography key={index} variant="body2" color="text.secondary">
            {entry.name}: {entry.value}
          </Typography>
        ))}
      </Box>
    );
  }
  return null;
};

export default CustomTooltip;