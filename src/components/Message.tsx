import React from "react";
import Alert from '@mui/material/Alert';

export default function Message({ severity, children }) {
  return (
    /* error - success - warning - info */
    <div>
      <Alert severity={severity}>{children}</Alert>
    </div>
  );
}
