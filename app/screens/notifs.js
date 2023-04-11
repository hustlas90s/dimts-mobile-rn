import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { getData } from "../helpers/asyncStorage";
import { Ionicons } from "@expo/vector-icons";
// import { useDispatch, useSelector } from "react-redux";
// import { getSchedules } from "../redux/features/appSlice";

const Schedule = ({ navigation }) => {
    // const dispatch = useDispatch();
    const [notifs, setNotifs] = useState([]);

    // const fetchSchedules = () => {
    //     dispatch(getSchedules()).then((res) => {
    //         if (res.payload.length) {
    //             setSchedules(res.payload);
    //         }
    //     });
    // };

    const checkLoggedIn = async () => {
        const token = await getData("access_token");
        if (!token) {
            navigation.replace("Login");
        }
    };

    useEffect(() => {
        checkLoggedIn();
        // fetchSchedules();
    }, []);
    return (
        <>
            {/* <AppBar navigation={navigation} title="Schedule" /> */}
            <ScrollView className="flex-1 bg-white p-3 flex flex-col gap-y-5">
                <Text
                    style={{ fontFamily: "Montserrat_700Bold" }}
                    className="text-center text-purple-600 text-2xl pt-4">
                    Notifications
                </Text>
                {/*  */}
                <View className="flex flex-col">
                    <View className="w-full p-3 flex flex-col gap-y-1">
                        <View className="flex flex-row items-center gap-x-3">
                            <Ionicons
                                name="md-megaphone-outline"
                                size={22}
                                color="#9333ea"
                            />
                            <Text style={{ fontFamily: "Montserrat_500Medium" }} className="text-gray-700 text-sm">A new hearing schedule has been created</Text>
                        </View>
                        <Text style={{ fontFamily: "Montserrat_300Light" }} className="text-gray-500 text-xs">April 28, 2023 5:00PM - 7:00PM</Text>
                    </View>
                    {/*  */}
                    {/* <View className="w-full p-3 flex flex-col gap-y-1">
                        <View className="flex flex-row items-center gap-x-3">
                            <Ionicons
                                name="md-briefcase-outline"
                                size={22}
                                color="#9333ea"
                            />
                            <Text style={{ fontFamily: "Montserrat_500Medium" }} className="text-gray-700 text-sm">This is a case notification text</Text>
                        </View>
                        <Text style={{ fontFamily: "Montserrat_300Light" }} className="text-gray-500 text-xs">5:00PM - 7:00PM</Text>
                    </View> */}
                    {/*  */}
                    {/* <View className="w-full p-3 flex flex-col gap-y-1">
                        <View className="flex flex-row items-center gap-x-3">
                            <Ionicons
                                name="md-document-text-outline"
                                size={22}
                                color="#9333ea"
                            />
                            <Text style={{ fontFamily: "Montserrat_500Medium" }} className="text-gray-700 text-sm">This is a document notification text</Text>
                        </View>
                        <Text style={{ fontFamily: "Montserrat_300Light" }} className="text-gray-500 text-xs">5:00PM - 7:00PM</Text>
                    </View> */}
                </View>
            </ScrollView>
        </>
    );
};

export default Schedule;
