import {
  SimpleForm,
  TextInput,
  Create,
  SelectInput,
  required,
  email,
} from "react-admin";



const UserCreate = () => (
  <Create
    transform={(data) => ({
      // id: data.id,
      name: data.name,
      email: data.email,
      role: data.role,
      created_at: data.created_at,
      status: data.status,
    })}
  >
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
      <TextInput
        source="created_at"
        defaultValue={new Date().toISOString()}
        type="hidden"
      />
      <TextInput source="status" defaultValue="active" type="hidden" />
    </SimpleForm>
  </Create>
);

export default UserCreate;
