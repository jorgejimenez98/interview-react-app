import * as React from "react";
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { BootstrapDialogTitle, BootstrapDialog } from "./modalExtra";

export default function ImageModal({ open, handleClose, image }) {
  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        {image.name}
      </BootstrapDialogTitle>
      <DialogContent dividers>
        <img
          src={image.src}
          alt={image.alt}
          className="img-fluid img-thumbnail rounded"
          style={{ width: "400px", height: "400px" }}
        />
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
}
