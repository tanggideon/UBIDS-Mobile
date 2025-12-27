import { resultData } from "@/constants";
import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/header";

const provisionalResults = resultData;

const Results = () => {
  const [activeResult, setActiveResult] = useState("");
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header title="Provisional Results" back={false} />
      <ScrollView className="flex flex-col gap-3 px-5 m-5">
        {provisionalResults.map((result, index) => (
          <View className="flex flex-col gap-3 mb-5" key={index}>
            <Text className="text-xs font-PoppinsBold text-gray-400">
              {result.year}
            </Text>
            <View className="flex flex-col gap-3">
              {result.result.map((item, index) => (
                <View key={index}>
                  <Pressable
                    className="flex flex-col rounded-t-md w-full h-fit p-5 gap-3 bg-blue-100 "
                    onPress={() => setActiveResult(item.id)}
                  >
                    <Text className="font-PoppinsBold text-lg text-blue-400">
                      {item.semester}
                    </Text>
                    <View>
                      <View className="flex flex-row gap-2">
                        <Text className="font-PoppinsSemiBold text-sm">
                          CGPA:
                        </Text>
                        <Text className="font-PoppinsSemiBold text-sm">
                          {item.CummulativeGradePoint.toFixed(2)}
                        </Text>
                      </View>
                      <View className="flex flex-row gap-2">
                        <Text className="font-PoppinsSemiBold text-sm">
                          Class:
                        </Text>
                        <Text className="font-PoppinsSemiBold text-sm">
                          {item.class}
                        </Text>
                      </View>
                    </View>
                  </Pressable>
                  <View
                    className={`p-3 ${activeResult === item.id ? "" : "hidden"}`}
                  >
                    {item.courses.map((course, index) => (
                      <View
                        className="flex flex-col gap-2 border-b border-gray-500 py-3"
                        key={index}
                      >
                        <Text
                          className="text-ellipsis font-PoppinsMedium text-blue-700 "
                          numberOfLines={1}
                        >
                          {course.course}
                        </Text>
                        <View className="flex flex-row justify-between items-center">
                          <View className="flex flex-col items-center">
                            <Text className="font-PoppinsBold text-sm">
                              {course.grade}
                            </Text>
                            <Text className="font-PoppinsBold text-md text-gray-500 text-xs">
                              Grade
                            </Text>
                          </View>
                          <View className="flex flex-col items-center">
                            <Text className="font-PoppinsBold text-sm">
                              {course.gradePoint}
                            </Text>
                            <Text className="font-PoppinsBold text-md text-gray-500 text-xs">
                              Grade Point
                            </Text>
                          </View>
                          <View className="flex flex-col items-center">
                            <Text className="font-PoppinsBold text-sm">
                              {course.qualityPoint}
                            </Text>
                            <Text className="font-PoppinsBold text-md text-gray-500 text-xs">
                              Quality Point
                            </Text>
                          </View>
                        </View>
                      </View>
                    ))}
                  </View>
                </View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Results;
