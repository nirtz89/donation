import React, { useState, Dispatch, SetStateAction } from 'react';
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { Badge } from '@material-ui/core';
import moment from 'moment';
import { IAppState } from '../App';

export interface ICalendarProps {
    startDate: Date;
    endDate: Date;
    appState: IAppState;
    setAppState: Dispatch<SetStateAction<IAppState>>;
}

const AppCalendar = (props: ICalendarProps) => {
    const [clickedDate, setClickedDate] = useState(Date.parse(props.appState.currentDate));

    const handleChange = (date: any) => {
        setClickedDate(date);
        const newState = { ...props.appState, currentDate: date.toLocaleDateString() };
        props.setAppState(newState);
    };

    const isDoneDay = (date: Date) => {
        const day = props.appState.days[date.toLocaleDateString()];
        return day && day.done;
    }

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
                let valid = isInCurrentMonth && day && moment(day).isBetween(moment(props.startDate), moment(props.endDate));
                if (day && isSameDayInMonth(day, props.startDate)) {
                    valid = true;
                }
                // looks to much pending icons...
                // const pending = valid && day && !isDoneDay(day);
                const done = valid && day && isDoneDay(day);
                return <Badge style={{color: 'green'}} badgeContent={!valid ? undefined : done ?  "✔" : undefined}>{dayComponent}</Badge>;
              }}
        />
    </MuiPickersUtilsProvider>
    );
};

export default AppCalendar;
