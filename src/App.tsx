import { Admin, Resource } from "react-admin";
import { dataProvider } from "./dataProvider/dataProvider";
import { authProvider } from "./auth/authProvider";
import ArticleIcon from "@mui/icons-material/Article";
import PersonIcon from "@mui/icons-material/Person";
import { Layout } from "./Layout/Layout";
import { ThemeProvider, useTheme } from "./themes/ThemeContext";
import Dashboard from "./pages/Dashboard/Dashboard";
import UserEdit from "./pages/Users/UserEdit";
import UserList from "./pages/Users/UserList";
import UserCreate from "./pages/Users/UserCreate";
import UserShow from "./pages/Users/UserShow";
import PostList from "./pages/Posts/PostList";
import PostEdit from "./pages/Posts/PostEdit";
import PostCreate from "./pages/Posts/PostCreate";
import { PostShow } from "./pages/Posts/PostShow";



function AppContent() {
  const { theme } = useTheme();

  return (
    <Admin
      theme={theme.light}
      darkTheme={theme.dark}
      dataProvider={dataProvider}
      authProvider={authProvider}
      dashboard={Dashboard}
      layout={Layout}
    >
      <Resource
        name="users"
        list={UserList}
        edit={UserEdit}
        create={UserCreate}
        show={UserShow}
        icon={PersonIcon}
      />
      <Resource
        name="posts"
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
        show={PostShow}
        icon={ArticleIcon}
      />
    </Admin>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
