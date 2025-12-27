import { courseInformation } from "@/constants";
import { icons } from "@/constants/icons";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";


const CourseDetails = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const courseDetails = courseInformation.find((course) => course.code === id);

  if (!courseDetails) {
    return (
      <View className="flex-1 bg-white items-center justify-center">
        <Text className="font-PoppinsBold text-lg text-gray-500">
          Course not found.
        </Text>
      </View>
    );
  }
  return (
    <View className="flex-1 bg-white">
      <View className="w-full h-60 relative">
        {/* <Header back={true} title={courseDetails.code}/> */}
        <Image
          source={courseDetails.image}
          className="absolute inset-0 z-0 w-full h-full"
        />
        <LinearGradient
          colors={["rgba(14,165,233,0)", "#6366f1"]}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 1,
            top: 0,
            left: 0,
          }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        />
        <View className="absolute bottom-5 left-5 z-10 w-full">
          <Text
            className="font-PoppinsBold text-lg text-ellipsis text-white"
            numberOfLines={1}
          >
            {courseDetails.name}
          </Text>
          <Text
            className="font-PoppinsBold text-sm text-ellipsis text-white"
            numberOfLines={1}
          >
            {courseDetails.code}
          </Text>
          <View className="flex flex-row gap-5 items-center w-full">
            <Text className="font-PoppinsBold text-sm">Lecturer:</Text>
            <TouchableOpacity className="bg-blue-400 p-2 rounded-full flex items-center justify-center">
              <Text className="font-PoppinsBold text-sm text-blue-100">
                {courseDetails.lecturer.title} {courseDetails.lecturer.name}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="flex-1 p-5 flex gap-5">
        <View className="flex flex-col gap-5">
          <View className="flex justify-between items-center w-full flex-row">
            <Text className="font-PoppinsBold text-sm text-gray-600">
              Course Materials
            </Text>
            <View className="rounded-full bg-blue-700 p-1 flex items-center justify-center w-6 h-6">
              <Text className="font-PoppinsBold text-xs text-white">
                {courseDetails.courseMaterial.length}
              </Text>
            </View>
          </View>
          <FlatList
            horizontal={true}
            data={courseDetails.courseMaterial}
            showsHorizontalScrollIndicator={false}
            ListEmptyComponent={() => (
              <View className="flex h-fit w-full items-center justify-center gap-5">
                <Image source={icons.sorry} alt="Ooops" className="w-16 h-16" />
                <Text className="font-PoppinsBold text-sm text-gray-500">
                  No Course Material Uploaded
                </Text>
              </View>
            )}
            renderItem={({ item }) => (
              <TouchableOpacity className="flex items-center w-[150px] h-fit bg-gray-200 py-5 px-3 rounded-md mr-3 gap-3">
                <Image
                  source={item.docType === "file/pdf" ? icons.pdf : icons.doc}
                  className="w-20 h-20"
                  width={500}
                  height={1000}
                  resizeMode="contain"
                />
                <Text
                  className="text-sm font-PoppinsBold text-center text-ellipsis"
                  numberOfLines={2}
                >
                  {item.name}
                </Text>
                <View className="w-full flex items-center flex-row justify-end">
                  <View className="flex flex-col items-end">
                    <Text className="font-PoppinsBold text-gray-700 text-sm">
                      {item.numberOfPages}
                    </Text>
                    <Text className="font-PoppinsBold text-gray-500 text-xs">
                      Pages
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <View className="flex flex-col gap-5 flex-1">
          <View className="w-full flex justify-between flex-row items-center">
            <Text className="font-PoppinsBold text-sm text-gray-600">
              Quizzes and Assignments
            </Text>
            <TouchableOpacity className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
              <Image source={icons.more1} className="w-5 h-5" />
            </TouchableOpacity>
          </View>
          <FlatList
            data={courseDetails.quizzes}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <View className="flex h-fit w-full items-center justify-center gap-5">
                <Image source={icons.sorry} alt="Ooops" className="w-16 h-16" />
                <Text className="font-PoppinsBold text-sm text-gray-500">
                  No Quizzes
                </Text>
              </View>
            )}
            renderItem={({ item }) => (
              <TouchableOpacity
                className="flex items-start w-full bg-gray-200  rounded-md gap-3 mb-5"
                onPress={() =>
                  router.navigate({
                    pathname: "/screens/quiz/[id]",
                    params: { id: item.id },
                  })
                }
              >
                <View className="w-full py-5 px-3 flex gap-3">
                  <View className="w-full flex flex-row justify-between">
                    <Text
                      className="text-sm font-PoppinsBold text-center text-ellipsis"
                      numberOfLines={2}
                    >
                      {item.title}
                    </Text>
                    <Text
                      className="text-sm font-PoppinsBold text-center text-ellipsis text-gray-500"
                      numberOfLines={2}
                    >
                      {item.studentsCount}
                    </Text>
                  </View>
                  <View className="flex w-full">
                    <View className="w-full flex flex-row justify-between">
                      <Text
                        className="text-sm font-PoppinsBold text-center text-ellipsis text-gray-400"
                        numberOfLines={2}
                      >
                        Score:
                      </Text>
                      <Text
                        className="text-sm font-PoppinsBold text-center text-ellipsis text-gray-400"
                        numberOfLines={2}
                      >
                        {item.score}/{item.allocated}
                      </Text>
                    </View>
                    <View className="w-full flex flex-row justify-between">
                      <Text
                        className="text-sm font-PoppinsBold text-center text-ellipsis text-gray-400"
                        numberOfLines={2}
                      >
                        Deadline:
                      </Text>
                      <Text
                        className="text-sm font-PoppinsBold text-center text-ellipsis text-gray-400"
                        numberOfLines={2}
                      >
                        {item.deadline}
                      </Text>
                    </View>
                  </View>
                </View>
                <View className="bg-blue-400 h-1 w-full" />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default CourseDetails;
