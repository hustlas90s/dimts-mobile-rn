import React from 'react'
import {Calendar} from 'react-native-calendars';

const CustomCalendar = ({ selectedDate, setSelectedDate, marked, onClickDates }) => {
    console.log("Marked Dates: ", marked)
  return (
    <Calendar
        onDayPress={day => {
            console.log("Selected day: ", day.dateString)
            setSelectedDate(day.dateString);
            onClickDates(day.dateString)
        }}
        markedDates={{
            [selectedDate]: {selected: true, disableTouchEvent: true},
            ...marked
        }}
        theme={{
            todayTextColor: "#9333ea",
            selectedDayBackgroundColor : "#e9d5ff",
            selectedDayTextColor : "#9333ea",
            arrowColor : "#9333ea",
            dotColor : "#9333ea",
            selectedDotColor : "#9333ea",
        }}
    />
  )
}

export default CustomCalendar