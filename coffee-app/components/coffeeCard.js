import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  StyleSheet,
  ShadowImage
} from "react-native";
import { StarIcon, PlusIcon } from "react-native-heroicons/solid";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function CoffeeCard({ item }) {
  const navigation = useNavigation();
  return (
    <View className=" py-4">
      <View
        style={{
          shadowColor: "#000",
          shadowRadius: 20,
          shadowOffset: { width: 5, height: 50 },
          shadowOpacity: 10,
          elevation: 8,
          // overflow:'hidden',
        }}
        className="rounded-[40px] h-[350px] w-[250px] bg-primary mt-16 py-2"
      >
        <View
          className=" flex-row justify-center -mt-4  "
          style={{
            shadowColor: "#000",
            shadowRadius: 20,
            shadowOffset: { width: 0, height: 40 },
            shadowOpacity: 0.8,
            elevation: 10,
          }}
        >
          <Image
            source={item.image}
            className="h-40 w-40 -mt-16 border border-blue-500 z-10"
          />
        </View>
        <View className="px-5 mt-5 space-y-3">
          <Text className="text-3xl text-white font-semibold z-10">
            {item.name}
          </Text>
          <View
            style={{ backgroundColor: "rgba(255,255,225,0.2)" }}
            className="flex-row items-center rounded-3xl p-1 px-2 space-x-1 w-16"
          >
            <StarIcon size="15" color="white" />
            <Text className="text-base font-semibold text-white">
              {item.stars}
            </Text>
          </View>
          <View className="flex-row space-x-1 z-10 mb-6">
            <Text className="text-ase text-white font-semi-bold opacity-60">
              Volume
            </Text>
            <Text className="text-ase text-white font-semi-bold">
              {item.volume}
            </Text>
          </View>
          <View
            className="flex-row justify-between items-center"
            style={{
              shadowColor: "#000",
              shadowRadius: 25,
              shadowOffset: { width: 0, height: 40 },
              shadowOpacity: 0.8,
              elevation: 2,
            }}
          >
            <Text className="text-white font-bold text-lg">${item.price}</Text>
            <TouchableOpacity
              onPress={()=>navigation.navigate('Product',{...item})}
              className="p-4 bg-white rounded-full"
              style={{
                shadowColor: "#000",
                shadowRadius: 40,
                shadowOffset: { width: -20, height: -10 },
                shadowOpacity: 1,
                elevation: 2,
              }}
            >
              <PlusIcon size={25} strokeWidth={2} color={"#805743"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  
  images: {
    // borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 6,
  },
});