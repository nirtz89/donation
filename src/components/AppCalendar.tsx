import React, { useState } from 'react';
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { Badge } from '@material-ui/core';

export interface ICalendatProps {
    start: Date;
    end: Date;
}

const AppCalendar = (props: ICalendatProps) => {
    const [clickedDate, setClickedDate] = useState(props.start);

    const handleChange = (date: any) => {
        // validate between start and end?
        if (date.getDate() > props.end.getDate() || date.getDate() < props.start.getDate()){
            console.debug('out');
        } else {
            //change redux / state
            setClickedDate(date);
        }
    };


    return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
              autoOk
              orientation="landscape"
              variant="static"
              openTo="date"
              value={clickedDate}
              onChange={handleChange}
              renderDay={(day, selectedDate, isInCurrentMonth, dayComponent) => {
                const isStart = isInCurrentMonth && day?.getDate() === props.start.getDate();
                const isEnd = isInCurrentMonth && day?.getDate() === props.end.getDate();
                return <Badge badgeContent={isStart ? "🌚" : isEnd ?  "🌚" : undefined}>{dayComponent}</Badge>;

              }}
        />
    </MuiPickersUtilsProvider>
    );
  };

export default AppCalendar;
