import React from "react";
import { MuiPickersUtilsProvider } from "material-ui-pickers";
import MomentUtils from "@date-io/moment";

const PickerRoot = Component => {
  function withRoot(props) {
    return (
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Component {...props} />
      </MuiPickersUtilsProvider>
    );
  }
  return withRoot;
};

export default PickerRoot;
