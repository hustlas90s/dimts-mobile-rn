import React from "react";
import { View, Text } from "react-native";
import { Menu, HamburgerIcon, Pressable } from "native-base";

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
                        navigation.navigate("Home");
                    }}>
                    Home
                </Menu.Item>
                <Menu.Item
                    onPress={() => {
                        navigation.navigate("Signup");
                    }}>
                    Schedule
                </Menu.Item>
                <Menu.Item
                    onPress={() => {
                        navigation.navigate("Profile");
                    }}>
                    Profile
                </Menu.Item>
                <Menu.Item
                    onPress={() => {
                        navigation.navigate("Login");
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
