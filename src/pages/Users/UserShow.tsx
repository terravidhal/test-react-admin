import {
  TextField,
  EmailField,
  DateField,
  Show,
  SimpleShowLayout,
} from "react-admin";
import StatusField from "./StatusField";



const UserShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="role" />
      <StatusField source="status" />
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

export default UserShow;
