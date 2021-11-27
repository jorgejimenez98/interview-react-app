import React from "react";
import Alert from "@material-ui/lab/Alert";

export default function Message({ severity, children }) {
  return (
    /* error - success - warning - info */
    <div>
      <Alert severity={severity}>{children}</Alert>
    </div>
  );
}
