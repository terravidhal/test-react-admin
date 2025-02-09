import { LoadingIndicator} from 'react-admin';
import { ThemeSwapper } from '../themes/ThemeSwapper';


export const AppBarToolbar = () => (
    <>
        <ThemeSwapper />
        <LoadingIndicator />
    </>
);
