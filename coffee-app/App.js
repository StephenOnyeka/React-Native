// import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image
} from "react-native";
import HomeScreen from "./screens/HomeScreen";
import AppNavigation from "./navigation/appNavigation";

export default function App() {
  return (
    <>
      {/* <HomeScreen /> */}
      <AppNavigation />
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
    </>
  );
}