// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, StatusBar, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    <View>
      <HomeScreen />

    {/* <View>
      
      <Text>Open up App.js to start working on your app!</Text>
    </View> */}
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>
    </View>    
  );
}