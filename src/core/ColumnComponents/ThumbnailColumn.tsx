import React, { useState } from "react";
import { Avatar, Tooltip } from "@material-ui/core";
import { ImageModal } from "../../components";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
      cursor: "pointer",
    },
  })
);

export default function ThumbnailColumn({ src, id, name }) {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const image = { src: src, alt: `Picture ${id}`, name: name };
  return (
    <div>
      <div onClick={handleOpenDialog}>
        <Tooltip title="Look Image">
          <Avatar alt={image.alt} src={image.src} className={classes.large} />
        </Tooltip>
      </div>

      <ImageModal
        open={openDialog}
        handleClose={handleDialogClose}
        image={image}
      />
    </div>
  );
}
