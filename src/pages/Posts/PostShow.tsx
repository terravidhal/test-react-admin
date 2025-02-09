import {
  TextField,
  ReferenceField,
  DateField,
  Show,
  SimpleShowLayout,
} from "react-admin";
import StatusField from "./StatusField";







export const PostShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="content" />
      <ReferenceField source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <StatusField />
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
    </SimpleShowLayout>
  </Show>
);
