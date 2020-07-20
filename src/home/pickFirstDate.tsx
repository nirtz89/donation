import React, { useState } from 'react';
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const PickFirstDate = (props) => {
    const [clickedDate, setClickedDate] = useState(props.start);

    const handleChange = (date: any) => {
        setClickedDate(date);
    };


    return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
              orientation="landscape"
              openTo="date"
              value={clickedDate}
              onChange={handleChange}
        />
    </MuiPickersUtilsProvider>
    );
};

export default PickFirstDate;
