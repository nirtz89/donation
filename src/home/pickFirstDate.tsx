import React, { useState } from 'react';
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export interface IPickFirstDateProps {
    setDate: any;
}

const PickFirstDate = (props: IPickFirstDateProps) => {
    const [clickedDate, setClickedDate] = useState<any>(null);

    const handleChange = (date: any) => {
        props.setDate(date);
        setClickedDate(date);
    };

    return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
              disableToolbar
              label="Select date"
              orientation="landscape"
              openTo="date"
              defaultValue={null}
              value={clickedDate}
              onClick={() => setClickedDate(new Date())}
              onChange={handleChange}
        />
    </MuiPickersUtilsProvider>
    );
};

export default PickFirstDate;
