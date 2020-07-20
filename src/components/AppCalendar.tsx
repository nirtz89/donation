import React, { useState } from 'react';
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { Badge } from '@material-ui/core';
import moment from 'moment';
import { IDay } from '../App';

export interface ICalendarProps {
    start: Date;
    end: Date;
    days: Record<string, IDay[]>;
}

const AppCalendar = (props: ICalendarProps) => {
    const [clickedDate, setClickedDate] = useState(props.start);

    const handleChange = (date: any) => {
        setClickedDate(date); // set current date here - points to the dic
    };

    const isSameDayInMonth = (date1: Date, date2: Date) => {
        return moment(date1).format('YYYY-MM-DD') === moment(date2).format('YYYY-MM-DD');
    }

    return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
              orientation="landscape"
              variant="static"
              openTo="date"
              value={clickedDate}
              onChange={handleChange}
              disableToolbar
              maxDate={props.end}
              minDate={props.start}
              renderDay={(day, selectedDate, isInCurrentMonth, dayComponent) => {
                // after redux -> set badge to compleated days = with at least 1 event
                const isStart = isInCurrentMonth && day && isSameDayInMonth(day, props.start);
                const isEnd = isInCurrentMonth && day && isSameDayInMonth(day, props.end);
                return <Badge style={{color: 'green'}} badgeContent={isStart ? "✔" : isEnd ?  "✔" : undefined}>{dayComponent}</Badge>;
              }}
        />
    </MuiPickersUtilsProvider>
    );
};

export default AppCalendar;
