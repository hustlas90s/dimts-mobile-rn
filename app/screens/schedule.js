import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
// import AppBar from "../components/appBar";
// import ScheduleDropdown from "../components/scheduleDropdown";
import { getData } from "../helpers/asyncStorage";
import { useDispatch, useSelector } from "react-redux";
import { getSchedules } from "../redux/features/appSlice";
import CustomCalendar from "../components/CustomCalendar";

const Schedule = ({ navigation }) => {
    const dispatch = useDispatch();
    const { scheduleLoading, caseSchedules } = useSelector((state) => state.appState)
    const [selectedSchedule, setSelectedSchedule] = useState({});
    const [dateMarks, setDateMarks] = useState({});
    const [selectedDate, setSelectedDate] = useState(new Date())

    const fetchSchedules = () => {
        dispatch(getSchedules()).then((res) => {
            if (res.payload.length) {
                let marks = {}
                // setSchedules(res.payload);
                res.payload.map((data) => {
                    marks[data.hearing_schedule] = {
                        selected: (selectedDate === data.hearing_schedule ? true : false),
                        marked: true, 
                    }
                })
                setDateMarks(marks)
            }
        });
    };

    const onChangeDateMarks = (currentDate) => {
        let marks = {}
        const selectedSched = caseSchedules.find((sched) => sched.hearing_schedule === currentDate)
        setSelectedSchedule(selectedSched)
        caseSchedules.map((sched) => {
            marks[sched.hearing_schedule] = {
                selected: (currentDate === sched.hearing_schedule ? true : false),
                marked: true, 
            }
        })
        setDateMarks(marks)
    }

    const checkLoggedIn = async () => {
        const token = await getData("access_token");
        if (!token) {
            navigation.replace("Login");
        }
    };

    useEffect(() => {
        checkLoggedIn();
        fetchSchedules();
    }, []);

    return (
        <>
            {/* <AppBar navigation={navigation} title="Schedule" /> */}
            <ScrollView className="flex-1 bg-white px-3 py-3">
                <Text
                    style={{ fontFamily: "Montserrat_700Bold" }}
                    className="text-center text-purple-600 text-2xl pt-4">
                    Hearing Schedules
                </Text>
                {/* <ScheduleDropdown schedules={schedules} /> */}
                { !scheduleLoading && (
                    <CustomCalendar 
                        selectedDate={ selectedDate } 
                        setSelectedDate={setSelectedDate} 
                        marked={dateMarks}
                        onClickDates={ (currentdate) => onChangeDateMarks(currentdate) }
                    />
                )}
                {
                    Object.keys(selectedSchedule).length > 0 ?
                    <View className="w-full p-3 flex flex-col gap-y-1">
                        <View className="flex flex-row items-center gap-x-3">
                            <Ionicons
                                name="md-document-text-outline"
                                size={22}
                                color="#9333ea"
                            />
                            <Text style={{ fontFamily: "Montserrat_500Medium" }} className="text-gray-700 text-sm">This is a document notification text</Text>
                        </View>
                        <Text style={{ fontFamily: "Montserrat_300Light" }} className="text-gray-500 text-xs">5:00PM - 7:00PM</Text>
                    </View>
                    : null
                }
            </ScrollView>
        </>
    );
};

export default Schedule;
