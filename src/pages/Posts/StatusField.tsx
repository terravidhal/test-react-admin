import { useRecordContext } from "react-admin";
import { Chip } from "@mui/material";




const StatusField = ({ label }: any) => {
  const record = useRecordContext();
  if (!record) return null;

  const statusStyles: any = {
    published: { color: "success", label: "Published" },
    draft: { color: "default", label: "Draft" },
  };

  const status = statusStyles[record.status] || statusStyles.draft;

  return (
    <Chip
      label={status.label}
      color={status.color}
      size="small"
      sx={{
        minWidth: "90px",
        "& .MuiChip-label": {
          fontWeight: 500,
        },
      }}
    />
  );
};

export default StatusField;
