import * as React from "react";
import { DetailsItemText, DetailsItemLists } from "./detailsComponents";
import { DialogTitle } from "./modalExtra";
import { TransitionProps } from "@material-ui/core/transitions";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Slide,
} from "@material-ui/core";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DetailsModal({ handleClose, open, item }) {
  return (
    <React.Fragment>
      <Dialog
        fullWidth
        fullScreen 
        maxWidth={"md"}
        TransitionComponent={Transition}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Item Details
        </DialogTitle>
        <DialogContent dividers>
          <div className="row mt-3 mr-3 mb-3">
            <div className="col-md-7">
              <img
                src={item.thumbnail}
                alt={item.thumbnail}
                className="img-fluid img-thumbnail rounded w-100"
                style={{ height: "500px" }}
              />
            </div>
            <div className="col-md-5 center-container">
              <DetailsItemText item={item} />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <DetailsItemLists list={item.professions} title={"Professions"} />
            </div>
            <div className="col-md-6">
              <DetailsItemLists list={item.friends} title={"Friends"} />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
