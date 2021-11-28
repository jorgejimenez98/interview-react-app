import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Visibility } from "@mui/icons-material";
import { DetailsModal } from "../../components";

export default function ActionsColumn({ item }) {
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  return (
    <React.Fragment>
      <Tooltip title={`Consult ${item.name}'s details`} placement="bottom">
        <IconButton onClick={handleOpenDialog}>
          <Visibility />
        </IconButton>
      </Tooltip>

      <DetailsModal
        open={openDialog}
        handleClose={handleDialogClose}
        item={item}
      />
    </React.Fragment>
  );
}
