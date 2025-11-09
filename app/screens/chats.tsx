import { useNavigation } from "expo-router";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/header";
import Search from "../components/search";

const chatData = [
  {
    id: "1",
    name: "Environmental Protection and Community Informatics (ENV 102)",
    lastMessage: "Hey! How are you?",
    timestamp: "2:30 PM",
  },
  {
    id: "2",
    name: "Community Health Planning (CHP 201)",
    lastMessage: "Let's catch up later.",
    timestamp: "1:15 PM",
  },
  {
    id: "3",
    name: "Health Policy Analysis (HPA 301)",
    lastMessage: "Don't forget the meeting tomorrow.",
    timestamp: "Yesterday",
  },
  {
    id: "4",
    name: "CHP 202 Study Group",
    lastMessage: "Can you send me the files?",
    timestamp: "Monday",
  },
];

const Chat = () => {
  const navigation = useNavigation;
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header title="Chats" back />
      <FlatList
        data={chatData}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => (
          <View className="flex-1 items-center justify-center mt-10">
            <Text className="text-gray-500 font-PoppinsBold">
              No chats available.
            </Text>
          </View>
        )}
        ListHeaderComponent={() => (
          <View className="p-5 border-b border-gray-200 gap-5">
            <Text className="font-PoppinsBold text-lg">Recent Chats</Text>
            <Search />
          </View>
        )}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              // navigation.navigate("app/chats/[id]", { id: item.id });
            }}
            className="p-5 border-b border-gray-200 flex flex-row items-center justify-between gap-3"
          >
            <View className="flex-1 overflow-hidden">
              <Text
                className="font-semibold text-base text-ellipsis "
                numberOfLines={1}
              >
                {item.name}
              </Text>
              <Text
                className="text-gray-500 font-PoppinsMedium text-sm text-ellipsis"
                numberOfLines={1}
              >
                {item.lastMessage}
              </Text>
            </View>
            <View className="flex items-end">
              <Text className="text-gray-400 text-sm">{item.timestamp}</Text>
              <View className="h-5 w-5 mt-2 flex items-center justify-center bg-blue-500 rounded-full">
                <Text className="text-white text-xs font-PoppinsBold ">2</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default Chat;
