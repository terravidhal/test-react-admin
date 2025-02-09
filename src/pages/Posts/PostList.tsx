import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  DateField,
  TextInput,
  ReferenceInput,
  SelectInput,
  EditButton,
  FilterButton,
  TopToolbar,
  CreateButton,
  ExportButton,
  FunctionField,
} from "react-admin";
import StatusField from "./StatusField";



const postFilters = [
  <TextInput source="q" label="Search by title" alwaysOn />,
  <ReferenceInput source="userId" reference="users" label="Author">
    <SelectInput optionText="name" />
  </ReferenceInput>,
  <SelectInput
    source="status"
    choices={[
      { id: "draft", name: "Draft" },
      { id: "published", name: "Published" },
    ]}
  />,
];

const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
  </TopToolbar>
);

const PostList = () => (
  <List
    filters={postFilters}
    actions={<ListActions />}
    sort={{ field: "created_at", order: "DESC" }}
  >
    <Datagrid
      rowClick="show"
      // bulkActionButtons={false}
    >
      <TextField
        source="title"
        label="Title"
        sx={{
          fontWeight: 500,
          "& span": { color: "#1976d2" },
        }}
      />
      <ReferenceField
        source="userId"
        reference="users"
        label="Author"
        link={false}
      >
        <TextField source="name" />
      </ReferenceField>
      <DateField
        source="created_at"
        label="Published Date"
        showTime
        options={{
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }}
      />
      <StatusField label="Status" />
      <FunctionField
        label="ACTIONS"
        render={(record) => <EditButton record={record} />}
        sortable={false}
      />
    </Datagrid>
  </List>
);

export default PostList;
