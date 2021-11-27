import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Tooltip from "@material-ui/core/Tooltip";

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

  return (
    <div>
      <Tooltip title="Look Image">
        <Avatar alt={`Picture ${id}`} src={src} className={classes.large} />
      </Tooltip>
    </div>
  );
}
