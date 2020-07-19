import React, { useState } from 'react';
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";


const Calendar = () => {
    const [date, changeDate] = useState(new Date());

    return (
     <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
              autoOk
              orientation="landscape"
              variant="static"
              openTo="date"
              value={date}
              onChange={changeDate as any}
        />
      </MuiPickersUtilsProvider>
    );
  };

export default Calendar;
