import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

interface ResultParams extends Record<string, string | undefined>{
  score?: string;
  correctAnswers?: string;
  totalQuestions?: string;
}

const ResultScreen = () => {
  const params = useLocalSearchParams<ResultParams>();
  const router = useRouter();
  
  const numScore = Number(params.score || "0");
  const numCorrect = Number(params.correctAnswers || "0");
  const numTotal = Number(params.totalQuestions || "0");

  // Calculate completion percentage
  const completionPercentage = Math.round((numCorrect / numTotal) * 100) || 0;
  
  return (
    <SafeAreaView className="flex-1 bg-[#0D1440]">
      <View className="flex-1 items-center justify-center px-6">
        <Text className="text-white text-3xl font-bold mb-8">Kết quả</Text>
        
        {/* Score circle */}
        <View className="bg-yellow-400 w-40 h-40 rounded-full items-center justify-center mb-8">
          <Text className="text-white text-5xl font-bold">{(numScore / 10).toFixed(2)}</Text>
        </View>
        
        <Text className="text-white text-2xl font-semibold mb-8">Điểm</Text>
        
        {/* Stats container */}
        <View className="bg-white rounded-xl w-full p-6 mb-8">
          {/* Completion rate */}
          <View className="flex-row justify-between items-center mb-4">
            <View className="flex-row items-center">
              <View className="w-6 h-6 rounded-full bg-pink-500 mr-3" />
              <Text className="font-semibold text-base">Hoàn thành</Text>
            </View>
            <Text className="text-pink-500 font-bold text-lg">{completionPercentage}%</Text>
          </View>
          
          {/* Total questions */}
          <View className="flex-row justify-between items-center mb-4">
            <View className="flex-row items-center">
              <View className="w-6 h-6 rounded-full bg-blue-400 mr-3" />
              <Text className="font-semibold text-base">Câu hỏi</Text>
            </View>
            <Text className="text-blue-400 font-bold text-lg">{numTotal}</Text>
          </View>
          
          {/* Correct answers */}
          <View className="flex-row justify-between items-center mb-4">
            <View className="flex-row items-center">
              <View className="w-6 h-6 rounded-full bg-green-500 mr-3" />
              <Text className="font-semibold text-base">Câu đúng</Text>
            </View>
            <Text className="text-green-500 font-bold text-lg">{numCorrect}</Text>
          </View>
          
          {/* Wrong answers */}
          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center">
              <View className="w-6 h-6 rounded-full bg-red-500 mr-3" />
              <Text className="font-semibold text-base">Câu sai</Text>
            </View>
            <Text className="text-red-500 font-bold text-lg">
              {numTotal - numCorrect}
            </Text>
          </View>
        </View>
        
        {/* Action buttons */}
        <View className="flex-row justify-between w-full mb-8">
          <TouchableOpacity className="bg-blue-500 w-20 h-20 rounded-full items-center justify-center">
            <Ionicons name="save-outline" size={30} color="white" />
            <Text className="text-white text-sm mt-1">Lưu</Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="bg-indigo-600 w-20 h-20 rounded-full items-center justify-center">
            <Ionicons name="thumbs-up-outline" size={30} color="white" />
            <Text className="text-white text-sm mt-1">Like</Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="bg-pink-500 w-20 h-20 rounded-full items-center justify-center">
            <Ionicons name="share-social-outline" size={30} color="white" />
            <Text className="text-white text-sm mt-1">Chia sẻ</Text>
          </TouchableOpacity>
        </View>
        
        {/* Confirm button */}
        <TouchableOpacity 
          className="bg-yellow-400 w-full py-4 rounded-xl items-center"
          onPress={() => router.push("/Exam")}
        >
          <Text className="text-black text-xl font-bold">Xác nhận</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ResultScreen;