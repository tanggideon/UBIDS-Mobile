import { icons } from "@/constants/icons";
import { router } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const Header = ({ title, back }: { title: string; back: boolean }) => {
  return (
    <View className="sticky top-0 z-10 bg-white py-2 px-5 flex justify-between items-center flex-row">
      {back && (
        <TouchableOpacity
          onPress={router.back}
          className="h-10 w-10 bg-blue-300 rounded-full flex items-center justify-center"
        >
          <Image source={icons.back} />
        </TouchableOpacity>
      )}
      <Text className="text-lg font-bold">{title}</Text>
      <TouchableOpacity
        onPress={router.back}
        className="h-10 w-10 rounded-full flex items-center justify-center"
      >
        <Image source={icons.more} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
