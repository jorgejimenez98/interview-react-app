import * as React from "react";
import { DetailsItemText, DetailsItemLists } from "./detailsComponents";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Box,
  Grid,
} from "@mui/material";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DetailsModal({ handleClose, open, item }) {
  return (
    <React.Fragment>
      <Dialog
        fullWidth
        maxWidth={"md"}
        TransitionComponent={Transition}
        open={open}
        onClose={handleClose}
      >
        <DialogContent>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={7}>
                <img
                  src={item.thumbnail}
                  alt={item.thumbnail}
                  className="img-fluid img-thumbnail rounded w-100"
                  style={{ height: "300px" }}
                />
              </Grid>
              <Grid item xs={5}>
                <DetailsItemText item={item} />
              </Grid>

              <Grid item xs={6}>
                <DetailsItemLists
                  list={item.professions}
                  title={"Professions"}
                />
              </Grid>
              <Grid item xs={6}>
                <DetailsItemLists list={item.friends} title={"Friends"} />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
