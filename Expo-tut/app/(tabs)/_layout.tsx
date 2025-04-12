import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "green",
        headerStyle: {
          backgroundColor: "#25292e",
        },
        headerShadowVisible: false,
        headerTintColor: "white",
        tabBarStyle: {
          backgroundColor: "#25292e",
          // borderTopColor: "#25292e",
          // borderTopWidth: 0,
        },
      }}      
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              size={30}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "information-circle" : "information-circle-outline"}
              size={30}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
