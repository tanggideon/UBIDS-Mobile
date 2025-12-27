
import Header from "@/app/components/header";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ChatDetails = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");

  // Assuming logged-in user:
  const currentUserId = "user_123"; 
  const renderMessage = ({ item }: { item: any }) => {
    const isMe = item.sender === currentUserId;

    return (
      <View
        className={`
          "my-2 px-4 py-3 rounded-xl max-w-[80%]" ${isMe ? "self-end bg-blue-600" : "self-start"} bg-gray-200"
        `}
      >
        <Text className={`"text-sm" ${isMe ? "text-white" : "text-black"}`}>
          {item.text}
        </Text>

        {isMe && (
          <Text className="text-[10px] text-white mt-1 opacity-70">
            {item.seen ? "Seen" : "Sent"}
          </Text>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white pb-10">
      <Header back title="Chat" />
     

      {/* Messages */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={{ padding: 10, paddingBottom: 80 }}
      />

      {/* Input */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        className="absolute bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-300"
      >
        <View className="flex-row items-center bg-gray-100 rounded-full px-4 py-2">
          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder="Type a message..."
            className="flex-1 mr-2"
          />

          <TouchableOpacity onPress={()=>{}}>
            
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatDetails;
