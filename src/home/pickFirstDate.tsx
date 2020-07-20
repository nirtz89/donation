import React, { useState } from 'react';
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export interface IPickFirstDateProps {
    setDate: any;
}

const PickFirstDate = (props: IPickFirstDateProps) => {
    const [clickedDate, setClickedDate] = useState(new Date());

    const handleChange = (date: any) => {
        props.setDate(date);
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
