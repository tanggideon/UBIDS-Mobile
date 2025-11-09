import { icons } from "@/constants/icons";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/header";

const Profile = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header title="Student Profile" back={false} />
      <ScrollView className="flex flex-col gap-3 px-5 m-5">
        <View className="flex-row gap-3 items-center mb-2">
          <View className=" rounded-full h-20 w-20 bg-gray-300 flex items-center justify-center overflow-hidden">
            <Image
              source={icons.profile1}
              resizeMode="contain"
              tintColor="#ffffff"
              className="h-10 w-10 rounded-full"
            />
          </View>
          <View className="flex-col gap-1">
            <Text className="text-gray-700 font-PoppinsBold text-lg">
              John Doe
            </Text>
            <Text className="text-gray-500 font-PoppinsSemiBold text-sm">
              BSc. Computer Science
            </Text>
            <Text className="text-blue-500 font-PoppinsSemiBold text-sm">
              UG0542321
            </Text>
          </View>
        </View>
        <View className="flex flex-row justify-between gap-5 border-t border-b border-gray-200 py-5">
          <View className="flex-1">
            <View className="flex flex-row items-center justify-between gap-1 w-full">
              <Text className="font-PoppinsSemiBold  mb-2 text-sm text-gray-500">
                Faculty
              </Text>
              <View className="flex-1 flex items-end">
                <Text
                  className="font-PoppinsSemiBold text-gray-700 mb-2 ml-5 text-ellipsis"
                  numberOfLines={1}
                >
                  Public Health
                </Text>
              </View>
            </View>
            <View className="flex flex-row items-center justify-between gap-1 w-full">
              <Text className="font-PoppinsSemiBold  mb-2 text-sm text-gray-500">
                Department
              </Text>
              <View className="flex-1 flex items-end">
                <Text
                  className="font-PoppinsSemiBold text-gray-700 mb-2 ml-5 text-ellipsis"
                  numberOfLines={1}
                >
                  Community Health and Primary Care
                </Text>
              </View>
            </View>
            <View className="flex flex-row items-center justify-between gap-1 w-full">
              <Text className="font-PoppinsSemiBold mb-2 text-sm text-gray-500">
                Level
              </Text>

              <View className="flex-1 flex items-end">
                <Text
                  className="font-PoppinsSemiBold text-gray-700 mb-2 ml-5 text-ellipsis"
                  numberOfLines={1}
                >
                  300
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View className="flex flex-col gap-3 mt-5">
          <TouchableOpacity className="flex flex-row justify-between items-center p-5 flex-1 gap-5 rounded-xl bg-gray-100">
            <Text className="font-PoppinsSemiBold text-md text-gray-500 ">
              Course Registration
            </Text>
            <Image
              source={icons.chevronright}
              tintColor="#6b7280"
              className="h-5 w-5"
            />
          </TouchableOpacity>
          <TouchableOpacity className="flex flex-row justify-between items-center p-5 flex-1 gap-5 rounded-xl bg-gray-100">
            <Text className="font-PoppinsSemiBold text-md text-gray-500 ">
              Fee Information
            </Text>
            <Image
              source={icons.chevronright}
              tintColor="#6b7280"
              className="h-5 w-5"
            />
          </TouchableOpacity>
          <View className="bg-gray-50 h-52 rounded-md"></View>
          <TouchableOpacity className="flex flex-row justify-between items-center p-5 flex-1 gap-5 rounded-xl bg-gray-100">
            <Text className="font-PoppinsSemiBold text-md text-gray-500 ">
              Lecture Timetable
            </Text>
            <Image
              source={icons.chevronright}
              tintColor="#6b7280"
              className="h-5 w-5"
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
