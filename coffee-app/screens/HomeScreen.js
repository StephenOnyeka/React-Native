import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  FlatList,
  TouchableHighlight,
  StyleSheet,
  Platform,
} from "react-native";
import { Shadow } from "react-native-shadow-2";

import Ionicons from "@expo/vector-icons/Ionicons";
import Fontisto from "@expo/vector-icons/Fontisto";
import { categories, coffeeItems } from "../constants";
import Carousel from "react-native-snap-carousel-expo";
import CoffeeCard from "../components/coffeeCard";
import { HomeModernIcon } from "react-native-heroicons/solid";
import HomeIcon from "react-native-heroicons/solid";

const icon = require("../images/10120807_1332.jpg");

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState(1);
  return (
    <View className="">
      <Image source={icon} className="w-full absolute h-48  opacity-10" />

      <SafeAreaView className="">
        <View className="px-4 flex-row justify-between items-center">
          <Ionicons name="person-circle-outline" size={32} color="#805743" />
          <View className="flex-row items-center space-x-2">
            <Ionicons name="location-sharp" size={20} color="#CCAB95" />
            <Text className="text-base font-semibold">New York</Text>
          </View>
          <Fontisto name="bell" size={20} color="black" />
        </View>
        <View className="mx-5 mt-14">
          <View className="flex-row justify-center rounded-full p-1 bg-[#e6e6e6]">
            <TextInput
              placeholder="Search"
              className="p-2 pl-4 flex-1 font-semibold text-gray-700 "
            />
            <TouchableOpacity className="flex items-center justify-center rounded-full p-2 px-3 bg-[#CCAB95]">
              <Ionicons name="search" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View className="px-5 mt-6">
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={(item) => item.id}
            className="overflow-visible"
            renderItem={({ item }) => {
              let isActive = item.id === activeCategory;
              let activeTextClass = isActive ? "text-white" : "text-gray-700";
              return (
                <TouchableOpacity
                  onPress={() => setActiveCategory(item.id)}
                  style={{
                    backgroundColor: isActive ? "#CCAB95" : "#00000012",
                  }}
                  className="p-4 px-5 rounded-full mr-2 shadow bg-[#00000012]"
                >
                  <Text className={`font-semibold + ${activeTextClass}`}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        {/* Coffee cards */}
        <View className=" ">
          <Carousel
            className=" border border-red-500"
            // containerCustomStyle={{ overflow: 'visible' }}
            data={coffeeItems}
            renderItem={({ item }) => <CoffeeCard item={item} />}
            firstItem={1}
            inactiveSlideOpacity={0.65} // opacity of inactive slides
            inactiveSlideScale={0.77} //size of inactive slides
            sliderWidth={350} //actual slide width
            itemWidth={260} //card width
            loop={true}
            slideStyle={{ display: "flex", alignItems: "center" }}
          />
          <View>
            <HomeModernIcon size="38" />
            {/* <HomeIcon size="38" /> */}
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
