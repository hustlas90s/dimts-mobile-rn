import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Login from "./screens/auth/login";
import Home from "./screens/home";
import Profile from "./screens/profile";
import Schedule from "./screens/schedule";
import Notifs from './screens/notifs'
import { Ionicons } from "@expo/vector-icons";

import {
    useFonts,
    Montserrat_100Thin,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light,
    Montserrat_300Light_Italic,
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black,
    Montserrat_900Black_Italic,
} from "@expo-google-fonts/montserrat";
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
    let [fontsLoaded] = useFonts({
        Montserrat_100Thin,
        Montserrat_100Thin_Italic,
        Montserrat_200ExtraLight,
        Montserrat_200ExtraLight_Italic,
        Montserrat_300Light,
        Montserrat_300Light_Italic,
        Montserrat_400Regular,
        Montserrat_400Regular_Italic,
        Montserrat_500Medium,
        Montserrat_500Medium_Italic,
        Montserrat_600SemiBold,
        Montserrat_600SemiBold_Italic,
        Montserrat_700Bold,
        Montserrat_700Bold_Italic,
        Montserrat_800ExtraBold,
        Montserrat_800ExtraBold_Italic,
        Montserrat_900Black,
        Montserrat_900Black_Italic,
    });
    if (!fontsLoaded) return null;
    return (
        <NavigationContainer>
        <Tab.Navigator
            initialRouteName="Court Etiquette"
            // tabBarOptions={{
            //     tabStyle: { justifyContent: 'center', alignItems: 'center' },
            // }}
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: '#9333ea',
                tabBarInactiveTintColor: 'gray',
                headerShown: false
            })}
        >
            <Tab.Screen 
                name="Hearing Schedules" 
                component={Schedule} 
                options={{
                    tabBarLabel: 'Schedules',
                    tabBarLabelStyle: styles.labelStyle,
                    tabBarStyle: styles.tabStyle,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="md-calendar-outline"
                            size={22}
                            color={color}
                        /> 
                    ),
                }}
            />
            <Tab.Screen 
                name="Court Etiquette" 
                component={Home}  
                options={{
                    tabBarLabel: 'Rules',
                    tabBarLabelStyle: styles.labelStyle,
                    tabBarStyle: styles.tabStyle,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="md-book-outline"
                            size={22}
                            color={color}
                        /> 
                    ),
                }}
            />
            <Tab.Screen 
                name="Notifications" 
                component={Notifs}  
                options={{
                    tabBarLabel: 'Notifs',
                    tabBarLabelStyle: styles.labelStyle,
                    tabBarStyle: styles.tabStyle,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="md-notifications-outline"
                            size={22}
                            color={color}
                        /> 
                    ),
                }}
            />
            <Tab.Screen 
                name="Profile" 
                component={Profile} 
                options={{
                    tabBarLabel: 'Profile',
                    tabBarLabelStyle: styles.labelStyle,
                    tabBarStyle: styles.tabStyle,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="md-person-outline"
                            size={22}
                            color={color}
                        /> 
                    ),
                }}
            />
        </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    tabStyle: {
        alignItems: 'center',
        paddingBottom : 5,
        paddingTop : 5,
        height : 55
    },
    labelStyle: {
        fontSize: 12,
    },
});

export default BottomNav