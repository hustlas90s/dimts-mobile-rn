import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { getData } from "../helpers/asyncStorage";
import { Ionicons } from "@expo/vector-icons";
import db from '../../firebaseConfig'
import { onSnapshot, collection } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { getSchedules } from "../redux/features/appSlice";
import moment from "moment";

const Schedule = ({ navigation }) => {
    const dispatch = useDispatch();
    const [notifs, setNotifs] = useState([]);

    const collectionRef = collection(db, "activity-logs");
    const fetchSchedules = () => {
        dispatch(getSchedules()).then((res) => {
            if (res.payload) {
                console.log("Notif schedules: ", res.payload)
                // setSchedules(res.payload);
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
		const unsub = onSnapshot(collectionRef, (querySnapshot) => {
			const items = [];
			querySnapshot.forEach((doc) => {
				items.push(doc.data());
			});
            const filteredItems = items.filter((item) => item.activity_type === 'hearing')
            setNotifs(filteredItems)
		});
		return () => {
			unsub();
		};
	}, [db]);

    useEffect(() => {
        checkLoggedIn();
        fetchSchedules();
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
                <View className="flex flex-col gap-y-5 px-5">
                    {
                        notifs.length > 0 ? notifs.map((notif, index) => {
                            return (
                                <TouchableOpacity key={notif.activity_name + index} className="flex flex-row items-center gap-x-3" onPress={() => {
                                    navigation.replace('Home')
                                }}>
                                    <View className="p-3 rounded-full bg-purple-100">
                                        <Ionicons
                                            name="md-megaphone-outline"
                                            size={22}
                                            color="#9333ea"
                                        />
                                    </View>
                                    <View className="flex flex-col">
                                        <Text style={{ fontFamily: "Montserrat_500Medium" }} className="text-gray-700 text-base tracking-widest">{ notif.activity_name }</Text>
                                        <Text style={{ fontFamily: "Montserrat_300Light" }} className="text-gray-500 text-sm">{ notif.activity_description }</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }) : <Text style={{ fontFamily: "Montserrat_300Light" }} className="text-gray-700 text-base tracking-widest text-center">No available notifications</Text>
                    }
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
