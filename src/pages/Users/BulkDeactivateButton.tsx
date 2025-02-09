import {
  useNotify,
  useRefresh,
  useUnselectAll,
  Confirm,
  useDataProvider,
  Button,
  useListContext,
} from "react-admin";
import { useState } from "react";
import { EyeOffIcon } from "lucide-react";





const BulkDeactivateButton = () => {
  const [open, setOpen] = useState(false);
  const { selectedIds, data: users = [] } = useListContext();
  const dataProvider = useDataProvider();
  const notify = useNotify();
  const refresh = useRefresh();
  const unselectAll = useUnselectAll("users");
  const handleClick = () => setOpen(true);
  const handleDialogClose = () => setOpen(false);

  const handleConfirm = async () => {
    try {
      const usersToUpdate = users?.filter((user) =>
        selectedIds.includes(user.id),
      );
      const updatedUsers = usersToUpdate?.map((user) => ({
        ...user,
        status: "inactive",
      }));
      await Promise.all(
        updatedUsers.map((user) =>
          dataProvider.updateMany("users", { ids: [user.id], data: user }),
        ),
      );
      notify("Users have been deactivated successfully", { type: "success" });
      refresh();
      unselectAll();
    } catch (error) {
      notify("Error deactivating users", { type: "error" });
    } finally {
      handleDialogClose();
    }
  };

  return (
    <>
      <Button label="Deactivate" onClick={handleClick}>
        <EyeOffIcon />
      </Button>
      <Confirm
        isOpen={open}
        title="Deactivate Users"
        content="Are you sure you want to deactivate the selected users?"
        onConfirm={handleConfirm}
        onClose={handleDialogClose}
      />
    </>
  );
};

export default BulkDeactivateButton;
