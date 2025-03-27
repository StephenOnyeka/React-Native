import { View, Text, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  ArrowLeftCircleIcon,
  ShoppingBagIcon,
} from "react-native-heroicons/outline";
import {
  HeartIcon,
  StarIcon,
  MinusIcon,
  PlusIcon,
} from "react-native-heroicons/solid";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../theme";

export default function ProductScreen(props) {
  const item = props.route.params; // we need to get the coffee details from route
  const navigation = useNavigation();
  const [size, setSize] = useState("small");
  const [digit, setDigit] = useState(2);
  return (
    <View>
      <StatusBar style="light" />
      <Image
        source={require("../images/coffee.jpg")}
        className="w-full h-[300px] rounded-b-[30px] absolute opacity-8
        0"
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
            className="text-3xl font-semibold text-contingentText"
          >
            {item.name}
          </Text>
          <Text className="font-semibold text-lg text-contingentText">
            $ {item.price}
          </Text>
        </View>
        <View className="mx-4 space-y-2">
          <Text className="text-lg font-bold text-contingentText">
            Coffee size
          </Text>
          <View className="flex-row justify-between">
            <TouchableOpacity
              onPress={() => setSize("small")}
              className={`p-3 px-8 rounded-full ${
                size == "small" ? "bg-contingentColor" : "bg-secondary"
              }`}
            >
              <Text
                className={size == "small" ? "text-white" : "text-gray-700"}
              >
                Small
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSize("medium")}
              className={`p-3 px-8 rounded-full ${
                size == "medium" ? "bg-contingentColor" : "bg-secondary"
              }`}
            >
              <Text
                className={size == "medium" ? "text-white" : "text-gray-700"}
              >
                Medium
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSize("large")}
              className={`p-3 px-8 rounded-full ${
                size == "large" ? "bg-contingentColor" : "bg-secondary"
              }`}
            >
              <Text
                className={size == "large" ? "text-white" : "text-gray-700"}
              >
                Large
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="mx-4 space-y-2 h-28">
          <Text className="text-lg font-bold text-contingentText">About</Text>
          <Text className="text-gray-600">{item.desc}</Text>
        </View>
        <View className="flex-row justify-between items-center mx-4 mb-2">
          <View className="flex-row items-center space-x-1">
            <Text className="text-base text-gray-500 font-semibold">
              Volume
            </Text>
            <Text className="text-base font-semibold">{item.volume}</Text>
          </View>
          <View className="flex-row items-center space-x-4 border-gray-500 border rounded-full p-1 px-4">
            <TouchableOpacity>
              <MinusIcon
                onPress={() => setDigit(digit - 1)}
                size={20}
                strokeWidth={3}
                color={themeColors.contingentText}
              />
            </TouchableOpacity>
            <Text className="font-extrabold text-contingentText text-lg">
              {digit}
            </Text>
            <TouchableOpacity>
              <PlusIcon
                onPress={() => setDigit(digit + 1)}
                size={20}
                strokeWidth={3}
                color={themeColors.contingentText}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* buy now button */}
        <View className="flex-row justify-between items-center mx-4">
          <TouchableOpacity className="p-4 rounded-full border border-gray-400">
            <ShoppingBagIcon size="30" color="gray" />
          </TouchableOpacity>
          <TouchableOpacity className="bg-contingentColor p-5 rounded-full flex-1 ml-3">
            <Text className="text-center text-base font-semibold text-white">
              Buy now
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

//
