import { courseInformation } from "@/constants";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Search from "../components/search";

const courses = courseInformation;

const router = useRouter();

const Courses = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="h-[200px] rounded-br-[50px] w-full bg-blue-600 p-10">
        <Text className="font-PoppinsBold text-5xl text-blue-200">Courses</Text>
        <View className="mt-5 flex flex-row gap-5 items-center">
          <Text className="text-white font-PoppinsBold">
            Total Credit Hours:
          </Text>
          <Text className="text-white font-PoppinsBold text-lg">21</Text>
        </View>
        <View className="flex flex-row gap-5 items-center">
          <Text className="text-white font-PoppinsBold">Total Courses:</Text>
          <Text className="text-white font-PoppinsBold text-lg">7</Text>
        </View>
      </View>
      <FlatList
        data={courses}
        keyExtractor={(course) => course.code}
        ListEmptyComponent={() => (
          <View className="flex-1 items-center justify-center mt-10">
            <Text className="text-gray-500 font-PoppinsBold">
              No chats available.
            </Text>
          </View>
        )}
        ListHeaderComponent={() => (
          <View className="p-5 border-b border-gray-200 gap-5">
            <Search />
          </View>
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="p-5 border-b flex-1 border-gray-200 flex flex-row items-center justify-between "
            onPress={() =>
              router.navigate({
                pathname: "/screens/course/[id]",
                params: { id: item.code },
              })
            }
          >
            <View className="flex flex-col h-full w-full overflow-hidden gap-2 rounded-md shadow-md shadow-gray-200 p-2">
              <Image
                source={item.image}
                resizeMode="cover"
                className="h-40 w-full rounded-md"
                width={1000}
                height={1000}
              />
              <View className="w-full ">
                <Text
                  className="font-semibold text-sm text-ellipsis"
                  numberOfLines={1}
                >
                  {item.name}
                </Text>
                <Text className="font-semibold text-sm text-gray-500">
                  {item.code}
                </Text>
                <View className="w-full flex flex-row justify-between mt-2 items-center">
                  <Text className="text-gray-400 font-PoppinsSemiBold text-sm">
                    Credits:
                  </Text>
                  <Text className="text-gray-400 font-PoppinsBold">
                    {item.creditHours}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default Courses;
