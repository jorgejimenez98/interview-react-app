import React, { useState } from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import { Visibility } from "@material-ui/icons";
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
