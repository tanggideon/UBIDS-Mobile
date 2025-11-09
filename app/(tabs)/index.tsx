import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { router } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const currentDate = new Date();
  const month = currentDate.getMonth() + 1; // Months are zero-based
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = monthNames[currentDate.getMonth()];
  const day = currentDate.getDate();

  return (
    <SafeAreaView className="flex-1 bg-white p-5">
      <View className="bg-white relative">
        <View className="flex flex-row justify-between items-center">
          <View className="h-10 w-10 rounded-full overflow-hidden bg-white flex items-center justify-center">
            <Image
              source={images.icon}
              resizeMode="contain"
              className="w-10 h-10"
            />
          </View>
          <Text className="text-gray-700 text-center font-PoppinsBold text-lg shadow-blue-600 shadow-lg">
            SDD-UBIDS
          </Text>
          <TouchableOpacity
            className="flex-row gap-3 flex items-center justify-center relative"
            onPress={() => {
              router.push("/screens/chats");
            }}
          >
            <Image
              source={icons.message}
              resizeMode="contain"
              tintColor="#3b82f6"
            />
            <View className="bg-red-700 rounded-full p-1 h-3 w-3 absolute top-0 right-0 " />
          </TouchableOpacity>
        </View>

        <View className=" mt-5 flex items-center justify-between flex-row">
          <View className="flex-row gap-3 items-center">
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
          <View className="flex-col items-end">
            <View className="flex-row gap-1 items-center">
              <Image
                source={icons.calendar}
                resizeMode="contain"
                tintColor="#3b82f6"
                className="h-5 w-5"
              />
              <Text className="text-gray-500 font-PoppinsBold text-lg">
                {day}
              </Text>
            </View>
            <Text className="text-gray-500 font-PoppinsSemiBold text-base">
              {monthName}
            </Text>
          </View>
        </View>
      </View>
      <View className="flex-1 items-start justify-start flex-col">
        <Text className="text-center text-gray-500 mt-5 font-PoppinsBold text-xs">
          Student Assessment
        </Text>
        <View className="mt-3 w-full rounded-lg flex items-center justify-center flex-col gap-5">
          <View className="bg-blue-400 h-28 rounded-lg w-full relative"></View>
          <View className="bg-blue-400 h-28 rounded-lg w-full"></View>
        </View>
        <Text className="text-center text-gray-500 mt-5 font-PoppinsBold text-xs">
          Student Credentials
        </Text>
        <View className="p-5 w-full flex gap-3">
          <View className="flex flex-row gap-5 w-full items-center">
            <Text className="font-PoppinsSemiBold text-sm">Email:</Text>
            <TextInput
              className="bg-gray-200 flex-1 p-2 rounded-md font-semibold text-sm flex items-center"
              value="johndoe.stu@ubids.edu.gh"
              numberOfLines={1}
              editable={false}
            />
          </View>
          <View className="flex flex-row gap-5 w-full items-center">
            <Text className="font-PoppinsSemiBold text-sm">Password:</Text>
            <TextInput
              className="bg-gray-200 flex-1 p-2 rounded-md font-semibold text-sm flex items-center"
              value="12345678"
              numberOfLines={1}
              editable={false}
            />
          </View>
        </View>
        <Text className="text-center text-gray-500 mt-5 font-PoppinsBold text-xs">
          Student Standing
        </Text>
        <View className="p-5 w-full flex gap-3">
          <View className="flex flex-row gap-5 w-full items-center justify-between">
            <Text className="font-PoppinsSemiBold text-sm">
              Ethical Standing:
            </Text>
            <Text className="font-PoppinsSemiBold text-sm bg-blue-200 text-blue-500 p-2 rounded-full">
              Good Ethical Standing
            </Text>
          </View>
          <View className="flex flex-row gap-5 w-full items-center justify-between">
            <Text className="font-PoppinsSemiBold text-sm">Fees Details:</Text>
            <Text className="font-PoppinsSemiBold text-sm text-red-500 p-2 bg-red-200 rounded-full">
              Not Paid in Full
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
