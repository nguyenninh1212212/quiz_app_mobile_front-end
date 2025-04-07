import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";

// Define types for our quiz data
interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "An angle whose value is ___, is called a complete angle.",
    options: ["Maharashtra", "Odisha", "Assam", "Tamil Nadu"],
    correctAnswer: "Odisha",
  },
  {
    id: 2,
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    correctAnswer: "Paris",
  },
];

const QuizScreen = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(string | null)[]>(Array(questions.length).fill(null));
  const [timeLeft, setTimeLeft] = useState<number>(120); // 2 phút (120 giây)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // Update the answer selection handler with type
  const handleAnswerSelect = (option: string) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion] = option;
    setSelectedAnswers(newSelectedAnswers);
  };
  
  // Fix the countCorrectAnswers function
  const countCorrectAnswers = (): number => {
    return questions.filter(
      (q, index) => q.correctAnswer === selectedAnswers[index]
    ).length;
  };
  
  // Submit function
  const handleSubmit = () => {
    const correctAnswers = countCorrectAnswers();
    const score = correctAnswers * 10; // 10 points per correct answer
    const totalQuestions = questions.length;
  
    router.push({
      pathname: "/(Exam)/detail/result",
      params: {
        score: `${score}`,
        correctAnswers: `${correctAnswers}`,
        totalQuestions: `${totalQuestions}`,
      },
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-[#0D1440]">
      {/* Header */}
      <View className="px-4 py-6 h-5/6 flex-col justify-between">
        <View className="flex-row justify-between items-center">
          <TouchableOpacity className="w-[30%]" onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-lg font-bold w-[30%]">Nộp bài</Text>
          <TouchableOpacity
            className="bg-green-500 px-4 py-2 rounded-lg w-[27%]"
            onPress={handleSubmit}
          >
            <Text className="text-white font-semibold">Nộp bài</Text>
          </TouchableOpacity>
        </View>

        {/* Thời gian đếm ngược */}
        <View className="mt-4 bg-yellow-500 px-4 py-2 rounded-full self-start">
          <Text className="text-black font-bold">
            Thời gian: {Math.floor(timeLeft / 60)}p {timeLeft % 60}s
          </Text>
        </View>

        {/* Câu hỏi */}
        <View className="bg-indigo-900 p-4 rounded-lg mt-4">
          <Text className="text-white font-bold text-lg">
            {questions[currentQuestion].question}
          </Text>
        </View>

        {/* Đáp án - UPDATED */}
        {questions[currentQuestion].options.map((option, index) => (
          <TouchableOpacity
            key={index}
            className={`p-3 rounded-lg mt-2 border-2 ${
              selectedAnswers[currentQuestion] === option
                ? option === questions[currentQuestion].correctAnswer
                  ? "bg-green-500 border-green-700"
                  : "bg-red-500 border-red-700"
                : "bg-indigo-800 border-indigo-600"
            }`}
            onPress={() => handleAnswerSelect(option)}
          >
            <Text className="text-white text-lg">{option}</Text>
          </TouchableOpacity>
        ))}

        {/* Nút điều hướng câu hỏi */}
        <View className="flex-row justify-between mt-6">
          <TouchableOpacity
            className="bg-blue-500 px-4 py-2 rounded-lg"
            onPress={handlePrev}
            disabled={currentQuestion === 0}
          >
            <Text className="text-white font-semibold">Prev Question</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-yellow-500 px-4 py-2 rounded-lg"
            onPress={handleNext}
            disabled={currentQuestion === questions.length - 1}
          >
            <Text className="text-black font-semibold">Next Question</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default QuizScreen;