// import { View, Text } from 'react-native'
// import NavigationContainer from
import React from "react";
import { NavigationContainer, ThemeProvider } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeIcon,
  HeartIcon,
  ShoppingBagIcon,
} from "react-native-heroicons/solid";
import {
  HomeIcon as HomeIconOutline,
  HeartIcon as HeartIconOutline,
  ShoppingBagIcon as ShoppingBagIconOutline,
} from "react-native-heroicons/outline";
// import HomeModernIcon from 'react-native-heroicons/solid'
import { themeColors } from "../theme";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import { LogBox, Text, View } from "react-native";
import { StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ contentStyle: { backgroundColor: "white" } }}
      >
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeTabs}
        />
        <Stack.Screen
          name="Product"
          options={{ headerShown: false }}
          component={ProductScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => menuIcons(route, focused),
        tabBarStyle: {
          marginBottom: 10,
          borderRadius: 50,
          backgroundColor: themeColors.contingentColor,
          marginHorizontal: 20,
          height: 60,
        },
        // tabBarItemStyle: { marginTop: 0 },
      })}
    >
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="favourite" component={HomeScreen} />
      <Tab.Screen name="cart" component={HomeScreen} />
    </Tab.Navigator>
  );
}

const menuIcons = (route, focused) => {
  let icon;
  if (route.name == "home") {
    icon = focused ? (
      <HomeIcon size="20" color={themeColors.contingentColor} />
    ) : (
      <HomeIconOutline size="25" color="white" />
    );
  } else if (route.name == "favourite") {
    icon = focused ? (
      <HeartIcon size="20" color={themeColors.contingentColor} />
    ) : (
      <HeartIconOutline size="25" color="white" />
    );
  } else if (route.name == "cart") {
    icon = focused ? (
      <ShoppingBagIcon size="20" color={themeColors.contingentColor} />
    ) : (
      <ShoppingBagIconOutline size="25" color="white" />
    );
  }
  return <View style={focused && styles.icon}>{icon}</View>;
};

const styles = StyleSheet.create({
  icon: {
    backgroundColor: "white",
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    padding: 10,
  },
});
