import React from "react";
import { View, Text } from "react-native";
import { Menu, HamburgerIcon, Pressable } from "native-base";
import { clear } from "../helpers/asyncStorage";

const AppBar = ({ navigation, title }) => {
    return (
        <View className="w-ful bg-white flex flex-row items-center justify-between px-4 py-4">
            <Menu
                w="190"
                trigger={(triggerProps) => {
                    return (
                        <Pressable
                            accessibilityLabel="More options menu"
                            {...triggerProps}>
                            <HamburgerIcon size={6} color="#9333EA" />
                        </Pressable>
                    );
                }}>
                <Menu.Item
                    onPress={() => {
                        navigation.replace("Schedule");
                    }}>
                    Schedule
                </Menu.Item>
                <Menu.Item
                    onPress={() => {
                        navigation.replace("Home");
                    }}>
                    Court Etiquette
                </Menu.Item>
                <Menu.Item
                    onPress={() => {
                        navigation.replace("Profile");
                    }}>
                    Profile
                </Menu.Item>
                <Menu.Item
                    onPress={async () => {
                        navigation.replace("Login");
                        await clear();
                    }}>
                    Sign Out
                </Menu.Item>
            </Menu>
            <View className="flex flex-row items-center">
                <Text
                    style={{
                        fontFamily: "Montserrat_600SemiBold",
                    }}
                    className="text-md">
                    {title}
                </Text>
            </View>
            <HamburgerIcon size={6} color="#ffffff" />
        </View>
    );
};

export default AppBar;
