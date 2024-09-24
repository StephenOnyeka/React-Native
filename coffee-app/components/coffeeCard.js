import { View, Text, Image } from "react-native";
import { coffeeItems } from "../constants";
import React from "react";

export default function CoffeeCard() {
  return (
    <View className="rounded-3xl h-[350px] w-[250px] bg-primary">
      <View
        style={{
          shadowColor: "black",
          shadowRadius: 30,
          shadowOffset: { width: 0, height: 40 },
          shadowOpacity: 0.8,
              }}
              className="flex-row justify-center -mt-14"
      >
              <Image source={coffeeItems.image} className="h-40 w-40" />
      </View>
      <View></View>
    </View>
  );
}
