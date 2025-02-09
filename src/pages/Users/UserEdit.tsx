import {
  Edit,
  SimpleForm,
  TextInput,
  SelectInput,
  required,
  email,
} from "react-admin";



const UserEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" validate={[required()]} fullWidth />
      <TextInput source="email" validate={[required(), email()]} fullWidth />
      <SelectInput
        source="role"
        choices={[
          { id: "admin", name: "Admin" },
          { id: "editor", name: "Editor" },
          { id: "user", name: "User" },
        ]}
      />
      <SelectInput
        source="status"
        choices={[
          { id: "active", name: "Active" },
          { id: "inactive", name: "Inactive" },
        ]}
      />
      <TextInput
        source="created_at"
        defaultValue={new Date().toISOString()}
        type="hidden"
      />
      <TextInput source="status" defaultValue="active" type="hidden" />
    </SimpleForm>
  </Edit>
);

export default UserEdit;
