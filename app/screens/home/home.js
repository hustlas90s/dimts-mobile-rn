import React, { useEffect } from "react";
import { View, Text, Image, FlatList, ScrollView, LogBox } from "react-native";
import { List } from "react-native-paper";
import rules from "../../../assets/images/etiquette.png";
import AppBar from "../../components/appBar";

const Home = ({ navigation }) => {
    useEffect(() => {
        LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    }, []);
    return (
        <>
            <AppBar navigation={navigation} title="Home" />
            <View className="flex-1 bg-white">
                <Text
                    style={{ fontFamily: "Montserrat_800ExtraBold" }}
                    className="text-center text-purple-600 text-3xl pt-4">
                    Court Etiquette
                </Text>
                <View className="items-center">
                    <Image
                        source={rules}
                        style={{
                            resizeMode: "center",
                            height: 180,
                            width: "100%",
                        }}
                    />
                </View>
                <ScrollView className="px-4">
                    <View>
                        <List.Section title="">
                            <List.Accordion
                                title="Court rules for everyone"
                                titleStyle={{
                                    fontFamily: "Montserrat_500Medium",
                                }}>
                                <View className="pl-6">
                                    <Text
                                        style={{
                                            fontFamily: "Montserrat_500Medium",
                                        }}
                                        className="text-md mb-2">
                                        When you’re in court:
                                    </Text>
                                    <FlatList
                                        data={[
                                            {
                                                key: "Turn off your mobile phone",
                                            },
                                            {
                                                key: "Sit quietly—don’t talk, comment or make noise if you are watching from the public gallery",
                                            },
                                            {
                                                key: "Don’t eat, drink or chew gum—courthouses have an area outside the courtroom where you can eat",
                                            },
                                            {
                                                key: "Don’t smoke in the courthouse",
                                            },
                                            {
                                                key: "Don’t make an audio or visual recording of proceedings",
                                            },
                                            {
                                                key: "Don’t broadcast the trial in any way",
                                            },
                                            {
                                                key: "Don’t speak to jurors if it is a jury trial",
                                            },
                                        ]}
                                        renderItem={({ item }) => {
                                            return (
                                                <Text
                                                    style={{
                                                        fontFamily:
                                                            "Montserrat_400Regular",
                                                    }}
                                                    className="text-sm mb-2">
                                                    {`\u2022 ${item.key}`}
                                                </Text>
                                            );
                                        }}
                                    />
                                </View>
                            </List.Accordion>
                            <List.Accordion
                                title="Respecting the judge or magistrate"
                                titleStyle={{
                                    fontFamily: "Montserrat_500Medium",
                                }}>
                                <View className="pl-6">
                                    <Text
                                        style={{
                                            fontFamily: "Montserrat_500Medium",
                                        }}
                                        className="text-md mb-2">
                                        The judge or magistrate is in charge of
                                        the court and everyone in the courtroom
                                        should show them respect.
                                    </Text>
                                    <Text
                                        style={{
                                            fontFamily: "Montserrat_500Medium",
                                        }}
                                        className="text-md mb-2">
                                        This includes:
                                    </Text>
                                    <FlatList
                                        data={[
                                            {
                                                key: "Standing whenever the magistrate or judge enters or leaves the courtroom—the depositions clerk or bailiff will call ‘all rise’",
                                            },
                                            {
                                                key: "Bowing your head to acknowledge the magistrate or judge every time they enter or leave the courtroom",
                                            },
                                            {
                                                key: "Calling the magistrate or judge ‘Your Honour’.",
                                            },
                                        ]}
                                        renderItem={({ item }) => {
                                            return (
                                                <Text
                                                    style={{
                                                        fontFamily:
                                                            "Montserrat_400Regular",
                                                    }}
                                                    className="text-sm mb-2">
                                                    {`\u2022 ${item.key}`}
                                                </Text>
                                            );
                                        }}
                                    />
                                </View>
                            </List.Accordion>
                            <List.Accordion
                                title="Defendants"
                                titleStyle={{
                                    fontFamily: "Montserrat_500Medium",
                                }}>
                                <View className="pl-6">
                                    <Text
                                        style={{
                                            fontFamily: "Montserrat_500Medium",
                                        }}
                                        className="text-md mb-2">
                                        As a defendant it is very important that
                                        you show respect for the court and the
                                        judge. In the courtroom, you should
                                        stand whenever the judge or magistrate
                                        speaks to you.
                                    </Text>
                                </View>
                            </List.Accordion>
                            <List.Accordion
                                title="Witnesses"
                                titleStyle={{
                                    fontFamily: "Montserrat_500Medium",
                                }}>
                                <View className="pl-6">
                                    <Text
                                        style={{
                                            fontFamily: "Montserrat_500Medium",
                                        }}
                                        className="text-md mb-2">
                                        You should wait outside the courtroom
                                        until you are called to give evidence.
                                        You shouldn’t talk to other witnesses
                                        about the case before you and they have
                                        given evidence.
                                    </Text>
                                </View>
                            </List.Accordion>
                            <List.Accordion
                                title="Jurors"
                                titleStyle={{
                                    fontFamily: "Montserrat_500Medium",
                                }}
                                className="text-purple-600">
                                <View className="pl-6">
                                    <Text
                                        style={{
                                            fontFamily: "Montserrat_500Medium",
                                        }}
                                        className="text-md mb-2">
                                        As a juror, you can’t have a mobile
                                        phone or other tablet device in the
                                        court room, even if it’s turned off.
                                        There will also be times when you will
                                        not be able to retain your mobile
                                        devices, even in the jury room. The
                                        bailiff will be the person who will
                                        inform you of these times.
                                    </Text>
                                </View>
                            </List.Accordion>
                        </List.Section>
                    </View>
                </ScrollView>
            </View>
        </>
    );
};

export default Home;
