import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Svg, Path } from 'react-native-svg';
import { Ionicons } from "@expo/vector-icons";

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

const HearingIcon = (iconColor, iconSize) => {
    return (
        <Svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className={`${iconSize} ${iconColor}`}
        >
            <Path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </Svg>
    )
}

const RulesIcon = (iconColor, iconSize) => {
    return (
        <Svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className={`${iconSize} ${iconColor}`}
        >
            <Path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </Svg>
    );
}

const ProfileIcon = (iconColor, iconSize) => {
    return (
        <Svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className={`${iconSize} ${iconColor}`}
        >
            <Path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </Svg>
    );
}

const getTabIcons = (routeName, iconColor, iconSize) => {
    let tabIcon;
    switch (routeName) {
        case 'Home':
            tabIcon = <HearingIcon iconColor={iconColor} iconSize={iconSize} />
            break;
        case 'Court Etiquette':
            tabIcon = <RulesIcon iconColor={iconColor} iconSize={iconSize} />
            break;
        case 'Profile':
            tabIcon = <ProfileIcon iconColor={iconColor} iconSize={iconSize} />
            break;
        default:
            tabIcon = <ProfileIcon iconColor={iconColor} iconSize={iconSize} />
            break;
    }
    return tabIcon
}

export default function App() {
  return (
    <NavigationContainer
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => getTabIcons(route.name, color, size),
          tabBarActiveTintColor: '#9333ea',
          tabBarInactiveTintColor: 'gray',
          headerShown: false
      })}
    >
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon:({focus, color, size})=>(  
            <Ionicons
              name="md-person-circle-outline"
              size={24}
              color={focus ? "#006600" : "#8e8e93"}
            />  
        )  
        }} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Oten" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
