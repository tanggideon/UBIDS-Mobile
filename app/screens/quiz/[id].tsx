import Header from "@/app/components/header";
import { Quizzes } from "@/constants";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// create a different table for quizzes and use id to get the quiz

type QuestionType = {
  id: string;
  question: string;
  options: string[];
  correctOptionIndex: number;
};

type QuizType = {
  id: string;
  title: string;
  studentsCount: number;
  score: number;
  allocated: number;
  deadline: string;
  duration: number;
  createdBy: string;
  questions: QuestionType[];
};

const Quiz = () => {
  const { id } = useLocalSearchParams();
  const quiz = Quizzes.find((quiz) => quiz.id === id);
  const questionList = quiz?.questions || [];
  const [Start, setStart] = useState(false);

const [answeredQuestions, setAnsweredQuestions] = useState<{ [key: string]: number }>({});

  const rules = [
    "Read all instructions carefully before starting the quiz.",
    "All questions are mandatory unless specified otherwise.",
    "Once you start, you cannot pause or restart the timer.",
    "Make sure to read each question carefully before answering.",
    "You can only submit the quiz once.",
    "Cheating or using unauthorized materials is prohibited.",
    "If you experience technical issues, contact support immediately.",
  ];
  if (!Start) {
    return <QuizDetails setStart={setStart} quiz={quiz} rules={rules} />;
  }
  const RecordAnswers = (QuestionID: string, OptionID: number) => {
  setAnsweredQuestions((prev) => ({
    ...prev,
    [QuestionID]: OptionID,
  }));
  console.log(answeredQuestions);
};

  return (
    <SafeAreaView className="w-full min-h-screen bg-white">
      <Header title={Start ? "Quiz Started" : "Quiz Details"} back={true} />
      <ScrollView className="w-full p-5 flex flex-col gap-5">
        {questionList.map((question, index) => (
          <View key={question.id} className="w-full">
            <Text className="text-md font-PoppinsBold text-gray-600 mb-3">
              {index + 1}. {question.question}
            </Text>
            <View className="w-full flex flex-col gap-3">
              {question.options.map((option, optionIndex) => (
                <Pressable
                  onPress={() => {
                    RecordAnswers(question.id, optionIndex);
                  }}
                  key={optionIndex}
                  className={`flex flex-row gap-3 items-center ${answeredQuestions[question.id] === optionIndex ? "bg-blue-200" : "bg-gray-100"}  p-3 rounded-md`}
                >
                  <View
                    className={`h-5 w-5 border-2 border-gray-400 rounded-full items-center justify-center `}
                  >
                    <View className="h-3 w-3 bg-gray-400 rounded-full" />
                  </View>
                  <Text className="font-PoppinsRegular text-gray-700">
                    {option}
                  </Text>
                </Pressable>
              ))}
            </View>
            <View className="h-1 bg-gray-200 w-full my-5" />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

function QuizDetails({
  setStart,
  quiz,
  rules,
}: {
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
  quiz: QuizType | undefined;
  rules: string[];
}) {
  return (
    <SafeAreaView className="w-full min-h-screen bg-white">
      <Header title="Quiz Details" back={true} />
      <ScrollView className="w-full p-5 flex flex-col gap-5">
        <View className="w-full">
          <Text className="text-lg font-PoppinsBold text-gray-600">
            {quiz?.title}
          </Text>
          <View className="mt-5 w-full flex flex-col gap-2">
            <View className="flex items-center justify-between w-full flex-row">
              <Text className="font-PoppinsSemiBold text-gray-600 text-sm">
                Duration:
              </Text>
              <Text className="font-PoppinsSemiBold text-gray-800">
                {quiz?.duration}
              </Text>
            </View>
            <View className="flex items-center justify-between w-full flex-row">
              <Text className="font-PoppinsSemiBold text-gray-600 text-sm">
                Deadline:
              </Text>
              <Text className="font-PoppinsSemiBold text-gray-800">
                {quiz?.deadline}
              </Text>
            </View>
            <View className="flex items-center justify-between w-full flex-row">
              <Text className="font-PoppinsSemiBold text-gray-600 text-sm">
                Questions:
              </Text>
              <Text className="font-PoppinsSemiBold text-gray-800">
                {quiz?.questions.length}
              </Text>
            </View>
          </View>
        </View>
        <View className="h-1 bg-gray-200 w-full my-5" />
        <View className="flex justify-between items-center w-full flex-row my-5">
          <Text className="font-PoppinsBold text-lg text-gray-600">
            Rules and Guidelines
          </Text>
        </View>
        <View className="w-full flex flex-col gap-3 mt-2">
          {rules.map((rule, index) => (
            <View key={index} className="flex flex-row gap-3">
              <Text className="font-PoppinsSemiBold text-gray-600">
                {index + 1}.
              </Text>
              <Text className="font-PoppinsRegular text-gray-600 flex-1">
                {rule}
              </Text>
            </View>
          ))}
        </View>
        <View className="h-1 bg-gray-200 w-full my-5" />
        <View className="flex items-center justify-between w-full flex-row">
          <Text className="font-PoppinsSemiBold text-gray-600 text-sm">
            Assessor:
          </Text>
          <Text className="font-PoppinsSemiBold text-gray-800">
            {quiz?.createdBy}
          </Text>
        </View>
        <View className="h-1 bg-gray-200 w-full my-5" />
        <Text
          className="w-full bg-blue-600 text-white font-PoppinsBold text-center py-3 rounded-md mt-10"
          onPress={() => setStart(true)}
        >
          Start Quiz
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Quiz;
