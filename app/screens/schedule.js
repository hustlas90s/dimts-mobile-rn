import React from "react";
import { View, Text, ScrollView } from "react-native";
import AppBar from "../components/appBar";
import ScheduleDropdown from "../components/scheduleDropdown";

const Schedule = ({ navigation }) => {
    return (
        <>
            <AppBar navigation={navigation} title="Schedule" />
            <ScrollView className="flex-1 bg-white px-3 py-3">
                <Text
                    style={{ fontFamily: "Montserrat_700Bold" }}
                    className="text-center text-purple-600 text-2xl pt-4">
                    Hearing Schedule
                </Text>
                <ScheduleDropdown />
            </ScrollView>
        </>
    );
};

export default Schedule;
