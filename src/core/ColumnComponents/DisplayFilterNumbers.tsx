import React from "react";
import { FormGroup, FormLabel, TextField } from "@material-ui/core";

function DisplayFilterNumbers({ type, filterList, onChange, index, column }) {
  return (
    <div>
      <FormLabel>{type}</FormLabel>
      <FormGroup row>
        <TextField
          label="min"
          type="number"
          variant="standard"
          value={filterList[index][0] || ""}
          onChange={(event) => {
            filterList[index][0] = event.target.value;
            onChange(filterList[index], index, column);
          }}
          style={{ width: "45%", marginRight: "5%" }}
        />
        <TextField
          label="max"
          type="number"
          variant="standard"
          value={filterList[index][1] || ""}
          onChange={(event) => {
            filterList[index][1] = event.target.value;
            onChange(filterList[index], index, column);
          }}
          style={{ width: "45%" }}
        />
      </FormGroup>
    </div>
  );
}

export default DisplayFilterNumbers;
