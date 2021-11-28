import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { HairColumnColumn } from "../../core/ColumnComponents";

function DetailsItemText({ item }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={12}>
        <Grid item xs={12} className="text-center">
          <h3 className="text-muted">{item.name}</h3>
        </Grid>
        <Grid item xs={12} className="text-center">
          <h5 className="text-muted">
            Age: <strong>{item.age}</strong>
          </h5>
          <hr />
          <h5 className="text-muted">
            Weight: <strong>{item.weight.toFixed(2)}</strong>
          </h5>
          <hr />
          <h5 className="text-muted">
            Height: <strong>{item.height.toFixed(2)}</strong>
          </h5>
          <hr />
          <h5 className="text-muted">Hair Color</h5>
          <HairColumnColumn text={item.hair_color} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default DetailsItemText;
