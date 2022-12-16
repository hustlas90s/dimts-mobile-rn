import React, { useEffect } from "react";
import { View, Text, ScrollView, LogBox } from "react-native";
import { List } from "react-native-paper";

const ScheduleDropdown = ({ schedules }) => {
    // const schedules = [
    //     {
    //         caseNo: "Th1s-i$-s5mple-No",
    //         crimeType: "Hate Crime",
    //         date: "Dec 12, 2022",
    //         startTime: "7:30 AM",
    //         endTime: "8:30 AM",
    //     },
    // ];
    useEffect(() => {
        LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    }, []);
    return (
        <>
            <View className="flex-1 bg-white">
                <ScrollView className="">
                    <View>
                        <List.Section title="">
                            {schedules.map((sched, index) => {
                                return (
                                    <List.Accordion
                                        key={index}
                                        title={`Case No. ${sched.case__case_no} - ${sched.case__crime_type}`}
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
                                                    {sched.case__case_no}
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
                                                    {sched.case__crime_type}
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
                                                    {sched.hearing_schedule}
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
                                                    {sched.start_time}
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
                                                    {sched.end_time}
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
