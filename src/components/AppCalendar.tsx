import React, { useState, Dispatch, SetStateAction } from 'react';
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { Badge } from '@material-ui/core';
import moment from 'moment';
import { IDay, IAppState } from '../App';

export interface ICalendarProps {
    startDate: Date;
    endDate: Date;
    appState: IAppState;
    setAppState: Dispatch<SetStateAction<IAppState>>;
}

const AppCalendar = (props: ICalendarProps) => {
    const [clickedDate, setClickedDate] = useState(props.startDate);

    const handleChange = (date: any) => {
        setClickedDate(date); // set current date here - points to the dic
        const newState = { ...props.appState, currentDate: date };
        props.setAppState(newState);
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
              maxDate={props.endDate}
              minDate={props.startDate}
              renderDay={(day, selectedDate, isInCurrentMonth, dayComponent) => {
                // after redux -> set badge to compleated days = with at least 1 event
                const isStart = isInCurrentMonth && day && isSameDayInMonth(day, props.startDate);
                const isEnd = isInCurrentMonth && day && isSameDayInMonth(day, props.endDate);
                return <Badge style={{color: 'green'}} badgeContent={isStart ? "✔" : isEnd ?  "✔" : undefined}>{dayComponent}</Badge>;
              }}
        />
    </MuiPickersUtilsProvider>
    );
};

export default AppCalendar;
