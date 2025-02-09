import { useRecordContext } from "react-admin";
import { Chip } from "@mui/material";




const StatusField = ({ label }: any) => {
  const record = useRecordContext();
  if (!record) return null;

  const statusStyles: any = {
    active: { color: "success", label: "Active" },
    inactive: { color: "error", label: "Inactive" },
  };

  const status = statusStyles[record.status] || statusStyles.active;

  return (
    <Chip
      label={status.label}
      color={status.color}
      size="small"
      sx={{
        minWidth: "80px",
        "& .MuiChip-label": {
          fontWeight: 500,
        },
      }}
    />
  );
};

export default StatusField;
