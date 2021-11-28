import * as React from "react";
import { DetailsItemText } from "./detailsComponents";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Box,
  Grid,
} from "@mui/material";

export default function DetailsModal({ handleClose, open, item }) {
  return (
    <React.Fragment>
      <Dialog fullWidth maxWidth={"md"} open={open} onClose={handleClose}>
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
                <DetailsItemText item={item}/>
              </Grid>
              <Grid item xs={4} className="bg-aqua">
                OK
              </Grid>
              <Grid item xs={8}>
                OK
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
