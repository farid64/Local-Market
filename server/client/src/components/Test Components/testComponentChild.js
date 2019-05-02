import React from "react";
import TextField from "@material-ui/core/TextField";

const componentChild = ({ action }) => {
  action("here is the data from child (me)");
  return (
    <div>
      <TextField label='hello' placeholder='no' />
    </div>
  );
};

export default componentChild;
