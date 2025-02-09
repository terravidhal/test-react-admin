import {
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  required,
} from "react-admin";





const PostEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="title" validate={[required()]} fullWidth />
      <TextInput
        source="content"
        multiline
        rows={5}
        validate={[required()]}
        fullWidth
      />
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <SelectInput
        source="status"
        choices={[
          { id: "draft", name: "Draft" },
          { id: "published", name: "Published" },
        ]}
      />
      <TextInput
        source="created_at"
        defaultValue={new Date().toISOString()}
        type="hidden"
      />
    </SimpleForm>
  </Edit>
);

export default PostEdit;
