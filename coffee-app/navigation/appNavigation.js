// import { View, Text } from 'react-native'
// import NavigationContainer from
import React from 'react'
import { NavigationContainer, ThemeProvider } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  HomeIcon,
  HeartIcon,
  HomeModernIcon,
} from "react-native-heroicons/solid";
// import HomeModernIcon from 'react-native-heroicons/solid'
// import HomeModernIcon from 'react-native-heroicons/solid'
import { themeColors } from '../theme';
import HomeScreen from '../screens/HomeScreen'
import { LogBox, Text, View } from 'react-native'


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

LogBox.ignoreLogs(['Non-serializable values were found in the navigation state'])

export default function AppNavigation() {
  return (
    <NavigationContainer>
          <Stack.Navigator screenOptions={{ contentStyle: { backgroundColor: 'white' } }}>
              <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeTabs} />
          </Stack.Navigator>
    </NavigationContainer>
  )
}

function HomeTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false, tabBarShowLabel: false, 
                tabBarIcon:({focused, color, size})=> menuIcons(route, focused),
                tabBarStyle: {
                    marginBottom: 20, borderRadius: 50,
                    backgroundColor: '#6e4b39',
                    marginHorizontal: 20
                },
                tabBarItemStyle: { marginTop: 30 }
            })}
        >
            <Tab.Screen name="home" component={HomeScreen} />
            <Tab.Screen name="favourite" component={HomeScreen} />
            <Tab.Screen name="cart" component={HomeScreen} />
        </Tab.Navigator>
    )
}

const menuIcons = (route, focused) => {
    let icon;
    if (route.name == 'home') {
        icon = focused ? <HomeIcon size='30' color={themeColors.primary} /> : <HomeModernIcon size="30" color="black" />
    } else if (route.name == "favourite") {
        icon = focused ? <HeartIcon size='30' color="black" /> : <HomeModernIcon size="30" color="black" />
    } else if (route.name == "cart") {
        icon = focused ? <HeartIcon size='30' color="black" /> : <HomeModernIcon size="30" color="black" />
    }
    let buttonClass = focused ? 'bg-white' : '';
    return (
        <View className= {"flex items-center rounded-full p-3 shadow" + buttonClass} >
            {icon}
        </View>
    )
}