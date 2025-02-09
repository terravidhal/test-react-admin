import type { ReactNode } from "react";
import { Layout as RALayout, CheckForApplicationUpdate} from "react-admin";
import AppBar from './AppBar';


export const Layout = ({ children }: { children: ReactNode }) => (
  <RALayout appBar={AppBar}>
    {children}
    <CheckForApplicationUpdate />
  </RALayout>
);
