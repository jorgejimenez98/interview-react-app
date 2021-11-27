import React from "react";
import { Button, Dialog } from "@material-ui/core";
import { DialogTitle, DialogContent, DialogActions } from "./modalExtra";

export default function ImageModal({ open, handleClose }) {
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        Modal title
      </DialogTitle>
      <DialogContent dividers>Picture goes Here</DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
