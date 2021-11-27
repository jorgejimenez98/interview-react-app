import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  })
);

export default function ThumbnailColumn({ src, id }) {
  const classes = useStyles();

  return (
    <div>
      <Avatar alt={`Picture ${id}`} src={src} className={classes.large} />
    </div>
  );
}
