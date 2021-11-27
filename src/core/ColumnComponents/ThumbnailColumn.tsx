import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { ImageModal } from "../../components";

export default function ThumbnailColumn({ src, id, name }) {
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
          <Avatar
            alt={image.alt}
            src={image.src}
            sx={{ width: 56, height: 56 }}
            className="pointer"
          />
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
