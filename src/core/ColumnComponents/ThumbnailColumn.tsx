import React, { useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Tooltip from "@material-ui/core/Tooltip";
import { ImageModal } from "../../components";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
      cursor: "pointer",
    },
  })
);

export default function ThumbnailColumn({ src, id }) {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  return (
    <div>
      <div onClick={handleOpenDialog}>
        <Tooltip title="Look Image">
          <Avatar alt={`Picture ${id}`} src={src} className={classes.large} />
        </Tooltip>
      </div>

      <ImageModal open={openDialog} handleClose={handleDialogClose} />
    </div>
  );
}
