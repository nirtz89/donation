import React, { useState } from 'react';
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { Badge } from '@material-ui/core';
import moment from 'moment';

export interface ICalendarProps {
    start: Date;
    end: Date;
}

const AppCalendar = (props: ICalendarProps) => {
    const [clickedDate, setClickedDate] = useState(props.start);

    const handleChange = (date: any) => {
        if (moment(date).isBetween(moment(props.start), moment(props.end))) {
            setClickedDate(date); // set redux state here
        } else {
            console.debug('out');
        }
    };

    const isSameDayInMonth = (date1: Date, date2: Date) => {
        return moment(date1).format('YYYY-MM-DD') === moment(date2).format('YYYY-MM-DD');
    }


    return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
              autoOk
              orientation="landscape"
              variant="static"
              openTo="date"
              value={clickedDate}
              onChange={handleChange}
              disableToolbar
              renderDay={(day, selectedDate, isInCurrentMonth, dayComponent) => {
                const isStart = isInCurrentMonth && day && isSameDayInMonth(day, props.start);
                const isEnd = isInCurrentMonth && day && isSameDayInMonth(day, props.end);
                return <Badge badgeContent={isStart ? "🌚" : isEnd ?  "🌚" : undefined}>{dayComponent}</Badge>;
              }}
        />
    </MuiPickersUtilsProvider>
    );
  };

export default AppCalendar;
