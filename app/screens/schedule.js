import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import AppBar from "../components/appBar";
import ScheduleDropdown from "../components/scheduleDropdown";
import { getData } from "../helpers/asyncStorage";
import { useDispatch, useSelector } from "react-redux";
import { getSchedules } from "../redux/features/appSlice";

const Schedule = ({ navigation }) => {
    const dispatch = useDispatch();
    const [schedules, setSchedules] = useState([]);

    const fetchSchedules = () => {
        dispatch(getSchedules()).then((res) => {
            if (res.payload.length) {
                setSchedules(res.payload);
            }
        });
    };
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
            <AppBar navigation={navigation} title="Schedule" />
            <ScrollView className="flex-1 bg-white px-3 py-3">
                <Text
                    style={{ fontFamily: "Montserrat_700Bold" }}
                    className="text-center text-purple-600 text-2xl pt-4">
                    Hearing Schedule
                </Text>
                <ScheduleDropdown schedules={schedules} />
            </ScrollView>
        </>
    );
};

export default Schedule;
