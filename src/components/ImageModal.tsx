import * as React from "react";
import { Button, Dialog } from "@material-ui/core";
import { DialogTitle, DialogContent, DialogActions } from "./modalExtra";

export default function ImageModal({ open, handleClose, image }) {
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        {image.name}
      </DialogTitle>
      <DialogContent dividers>
        <img
          src={image.src}
          alt={image.alt}
          className="img-fluid img-thumbnail rounded"
          style={{ width: "400px", height: "400px" }}
        />
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
