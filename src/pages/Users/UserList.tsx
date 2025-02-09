import {
  List,
  Datagrid,
  TextField,
  EmailField,
  DateField,
  TextInput,
  SelectInput,
  BulkDeleteButton,
  FilterButton,
  CreateButton,
  ExportButton,
  TopToolbar,
} from "react-admin";
import StatusField from "./StatusField";
import BulkDeactivateButton from "./BulkDeactivateButton";



const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
  </TopToolbar>
);

const userFilters = [
  <TextInput source="q" label="Search by name" alwaysOn />,
  <SelectInput
    source="role"
    choices={[
      { id: "admin", name: "Admin" },
      { id: "editor", name: "Editor" },
      { id: "user", name: "User" },
    ]}
  />,
  <SelectInput
    source="status"
    choices={[
      { id: "active", name: "Active" },
      { id: "inactive", name: "Inactive" },
    ]}
  />,
];

const PostBulkActionButtons = () => (
  <>
    <BulkDeactivateButton />
    <BulkDeleteButton />
  </>
);

 const UserList = () => (
  <List
    filters={userFilters}
    actions={<ListActions />}
    sort={{ field: "created_at", order: "DESC" }}
  >
    <Datagrid
      bulkActionButtons={<PostBulkActionButtons />}
    >
      <TextField source="id" />
      <TextField
        source="name"
        sx={{
          fontWeight: 500,
          "& span": { color: "#1976d2" },
        }}
      />
      <EmailField source="email" />
      <TextField source="role" />
      <StatusField label="Status" />
      <DateField
        source="created_at"
        showTime
        options={{
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }}
      />
    </Datagrid>
  </List>
);

export default UserList;