import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

const Search = () => {
  return (
    <View className="w-full h-12 bg-gray-100 rounded-lg flex flex-row items-center px-4 gap-3">
      <Image source={icons.search} tintColor="#6b7280" />
      <TextInput className="flex-1" placeholder="Search Activity" />
    </View>
  );
};

export default Search;
