import React, { useEffect } from "react";
import { View, Text, ScrollView, LogBox } from "react-native";
import { List } from "react-native-paper";

const ScheduleDropdown = () => {
    const schedules = [
        {
            caseNo: "69",
            crimeType: "Fucking Crime",
            date: "Dec 12, 2022",
            startTime: "8:00 AM",
            endTime: "9:00 AM",
        },
        {
            caseNo: "80",
            crimeType: "Fucking Crime",
            date: "Dec 12, 2022",
            startTime: "8:00 AM",
            endTime: "9:00 AM",
        },
        {
            caseNo: "90",
            crimeType: "Fucking Crime",
            date: "Dec 12, 2022",
            startTime: "8:00 AM",
            endTime: "9:00 AM",
        },
        {
            caseNo: "69",
            crimeType: "Fucking Crime",
            date: "Dec 12, 2022",
            startTime: "8:00 AM",
            endTime: "9:00 AM",
        },
        {
            caseNo: "80",
            crimeType: "Fucking Crime",
            date: "Dec 12, 2022",
            startTime: "8:00 AM",
            endTime: "9:00 AM",
        },
        {
            caseNo: "90",
            crimeType: "Fucking Crime",
            date: "Dec 12, 2022",
            startTime: "8:00 AM",
            endTime: "9:00 AM",
        },
    ];
    useEffect(() => {
        LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    }, []);
    return (
        <>
            <View className="flex-1 bg-white">
                <ScrollView className="">
                    <View>
                        <List.Section
                            title=""
                            style={{ backgroundColor: "white" }}>
                            {schedules.map((sched, index) => {
                                return (
                                    <List.Accordion
                                        key={index}
                                        title={`Case No. ${sched.caseNo} - ${sched.date}`}
                                        titleStyle={{
                                            fontFamily: "Montserrat_500Medium",
                                        }}
                                        style={{ backgroundColor: "white" }}>
                                        <View className="pl-6">
                                            <Text
                                                style={{
                                                    fontFamily:
                                                        "Montserrat_600SemiBold",
                                                }}
                                                className="text-sm mb-1 text-purple-600">
                                                {"Case No.: "}
                                                <Text
                                                    style={{
                                                        fontFamily:
                                                            "Montserrat_500Medium",
                                                    }}
                                                    className="text-sm mb-2 text-gray-700">
                                                    {sched.caseNo}
                                                </Text>
                                            </Text>
                                            <Text
                                                style={{
                                                    fontFamily:
                                                        "Montserrat_600SemiBold",
                                                }}
                                                className="text-sm mb-1 text-purple-600">
                                                {"Crime Type: "}
                                                <Text
                                                    style={{
                                                        fontFamily:
                                                            "Montserrat_500Medium",
                                                    }}
                                                    className="text-sm mb-2 text-gray-700">
                                                    {sched.crimeType}
                                                </Text>
                                            </Text>
                                            <Text
                                                style={{
                                                    fontFamily:
                                                        "Montserrat_600SemiBold",
                                                }}
                                                className="text-sm mb-1 text-purple-600">
                                                {"Date: "}
                                                <Text
                                                    style={{
                                                        fontFamily:
                                                            "Montserrat_500Medium",
                                                    }}
                                                    className="text-sm mb-2 text-gray-700">
                                                    {sched.date}
                                                </Text>
                                            </Text>
                                            <Text
                                                style={{
                                                    fontFamily:
                                                        "Montserrat_600SemiBold",
                                                }}
                                                className="text-sm mb-1 text-purple-600">
                                                {"Start Time: "}
                                                <Text
                                                    style={{
                                                        fontFamily:
                                                            "Montserrat_500Medium",
                                                    }}
                                                    className="text-sm mb-2 text-gray-700">
                                                    {sched.startTime}
                                                </Text>
                                            </Text>
                                            <Text
                                                style={{
                                                    fontFamily:
                                                        "Montserrat_600SemiBold",
                                                }}
                                                className="text-sm mb-1 text-purple-600">
                                                {"End Time: "}
                                                <Text
                                                    style={{
                                                        fontFamily:
                                                            "Montserrat_500Medium",
                                                    }}
                                                    className="text-sm mb-2 text-gray-700">
                                                    {sched.endTime}
                                                </Text>
                                            </Text>
                                        </View>
                                    </List.Accordion>
                                );
                            })}
                        </List.Section>
                    </View>
                </ScrollView>
            </View>
        </>
    );
};

export default ScheduleDropdown;
