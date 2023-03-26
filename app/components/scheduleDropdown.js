import React, { useEffect, useState } from "react";
import moment from "moment"
import { View, Text, ScrollView, LogBox, Image } from "react-native";
import { List } from "react-native-paper";

const ScheduleDropdown = ({ schedules }) => {

    useEffect(() => {
        LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    }, []);
    return (
        <>
            <View className="flex-1 bg-white">
                <ScrollView className="">
                    <View>
                        <List.Section title="">
                            {schedules.length > 0 ? schedules.map((sched, index) => {
                                return (
                                    <List.Accordion
                                        key={index}
                                        title={`${sched.case__case_no}`}
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
                                                className="text-sm py-2 text-purple-600">
                                                {"Case No: "}
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
                                                className="text-sm py-2 text-purple-600">
                                                {"Crime Type: "}
                                                <Text
                                                    style={{
                                                        fontFamily:
                                                            "Montserrat_500Medium",
                                                    }}
                                                    className="text-sm mb-2 text-gray-700">
                                                    {sched.case__crime_type.includes("[") ? sched.case__crime_type.slice(1, -1).replace(/['"]+/g, "") : sched.case__crime_type}
                                                </Text>
                                            </Text>
                                            <Text
                                                style={{
                                                    fontFamily:
                                                        "Montserrat_600SemiBold",
                                                }}
                                                className="text-sm py-2 text-purple-600">
                                                {"Date: "}
                                                <Text
                                                    style={{
                                                        fontFamily:
                                                            "Montserrat_500Medium",
                                                    }}
                                                    className="text-sm mb-2 text-gray-700">
                                                    {moment(sched.hearing_schedule).format("LL")}
                                                </Text>
                                            </Text>
                                            <Text
                                                style={{
                                                    fontFamily:
                                                        "Montserrat_600SemiBold",
                                                }}
                                                className="text-sm py-2 text-purple-600">
                                                {"Start Time: "}
                                                <Text
                                                    style={{
                                                        fontFamily:
                                                            "Montserrat_500Medium",
                                                    }}
                                                    className="text-sm mb-2 text-gray-700">
                                                    {moment(sched.start_time, "HH:mm").format("hh:mm A")}
                                                </Text>
                                            </Text>
                                            <Text
                                                style={{
                                                    fontFamily:
                                                        "Montserrat_600SemiBold",
                                                }}
                                                className="text-sm py-2 text-purple-600">
                                                {"End Time: "}
                                                <Text
                                                    style={{
                                                        fontFamily:
                                                            "Montserrat_500Medium",
                                                    }}
                                                    className="text-sm mb-2 text-gray-700">
                                                    {moment(sched.end_time, "HH:mm").format("hh:mm A")}
                                                </Text>
                                            </Text>
                                            <Text
                                                style={{
                                                    fontFamily:
                                                        "Montserrat_600SemiBold",
                                                }}
                                                className="text-sm py-2 text-purple-600">
                                                {"Hearing: "}
                                                <Text
                                                    style={{
                                                        fontFamily:
                                                            "Montserrat_500Medium",
                                                    }}
                                                    className="text-sm mb-2 text-gray-700">
                                                    {sched.hearing_type}
                                                </Text>
                                            </Text>
                                        </View>
                                    </List.Accordion>
                                );
                            }) 
                            : <Text
                                    style={{
                                        fontFamily:
                                            "Montserrat_500Medium",
                                    }}
                                    className="text-sm mb-2 text-gray-700">
                                    No hearing schedules available.
                                </Text>
                            }
                        </List.Section>
                    </View>
                </ScrollView>
            </View>
        </>
    );
};

export default ScheduleDropdown;
