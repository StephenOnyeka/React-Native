import { View, Text, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ArrowLeftCircleIcon } from "react-native-heroicons/outline";
import { HeartIcon, StarIcon } from "react-native-heroicons/solid";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../theme";

export default function ProductScreen(props) {
  const item = props.route.params; // we need to get the coffee details from route
  const navigation = useNavigation();
  const [size, setSize] = useState("small");
  return (
    <View>
      <StatusBar style="light" />
      <Image
        source={require("../images/coffee.jpg")}
        className="w-full h-[300px] rounded-b-[30px] absolute"
      />
      <SafeAreaView className="space-y-4">
        <View className="mx-4 flex-row justify-between items-center">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeftCircleIcon size={50} strokeWidth={1.2} color={"white"} />
          </TouchableOpacity>
          <TouchableOpacity className="rounded-full border-2 border-white p-2">
            <HeartIcon size={24} color={"white"} />
          </TouchableOpacity>
        </View>
        <View
          className="flex-row justify-center"
          style={{
            shadowColor: themeColors.contingentColor,
            shadowRadius: 30,
            shadowOffset: { width: 0, height: 30 },
            shadowOpacity: 0.9,
            elevation: 10,
          }}
        >
          <Image source={item.image} className="h-60 w-60" />
        </View>
        <View
          style={{ backgroundColor: themeColors.contingentColor }}
          className="flex-row items-center rounded-3xl p-1 px-2 mx-4 space-x-1 w-16"
        >
          <StarIcon size="15" color="white" />
          <Text className="text-base font-semibold text-white">
            {item.stars}
          </Text>
        </View>
        <View className="mx-4 flex-row justify-between items-center">
          <Text
            style={themeColors.contingentColor}
            className="text-3xl font-semibold"
          >
            {item.name}
          </Text>
          <Text>${item.price}</Text>
        </View>
        <View className="mx-4 space-y-2">
          <Text className="text-lg font-bold">Coffee size</Text>
          <View className="flex-row justify-between">
            <TouchableOpacity
              onPress={() => setSize("small")}
              className={`p-3 px-8 rounded-full ${size=="small" ? 'bg-contingentColor': 'bg-secondary'}`}
            >
              <Text className={size == "small" ? "text-white" : "text-gray-700"}>Small</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSize("small")}
              className={`p-3 px-8 rounded-full ${size=="small" ? 'bg-contingentColor': 'bg-secondary'}`}
            >
              <Text className={size == "small" ? "text-white" : "text-gray-700"}>Medium</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSize("small")}
              className={`p-3 px-8 rounded-full ${size=="small" ? 'bg-contingentColor': 'bg-secondary'}`}
            >
              <Text className={size == "small" ? "text-white" : "text-gray-700"}>Large</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
