import React, { useState, Component } from "react";
import { DatePicker } from "material-ui-pickers";
import PickerRoot from "./PickerRoot";
import { renderByOrder } from "recharts/lib/util/ReactUtils";

class DateComponent extends Component {
  render() {
    const [selectedDate, handleDateChange] = useState(new Date());
    return <DatePicker value={selectedDate} onChange={handleDateChange} />;
  }
}

export default PickerRoot(DateComponent);
