import { ICourse, QuizCardCreateProps } from "@/type/Card";
import { useRouter } from "expo-router";
import React, { useCallback } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";

interface IPayload {
  data: ICourse;
}

const QuizCard: React.FC<IPayload> = ({ data }) => {
  const router = useRouter();
  const handlePress = useCallback(() => {
    router.push({
      pathname: "/Exam/[id]",
      params: { id: "456" },
    });
  }, [router]);
  return (
    <TouchableOpacity
      className="bg-white rounded-xl py-1 my-3 px-2  shadow-lg"
      onPress={handlePress}
    >
      <View className="flex-row items-center">
        {/* Hình ảnh logo bên trái */}
        <Image
          source={{
            uri: "https://cdn.iconscout.com/icon/free/png-256/html5-40-1175193.png",
          }}
          className="w-16 h-16"
          resizeMode="contain"
        />

        {/* Nội dung chính */}
        <View className="flex-1 ml-4">
          <Text className="text-sm line-clamp-1 font-bold text-gray-900">
            What is HTML, CSS?
          </Text>
          <View className="flex-row items-center mt-2">
            <Avatar.Image
              source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
              size={30}
            />
            <View className="ml-3">
              <Text className="text-xs font-semibold text-gray-800">
                Nguyễn Văn B
              </Text>
              <Text className="text-xs text-gray-600">Đại học điện lực</Text>
            </View>
          </View>
        </View>

        {/* Điểm số */}
        <View className="bg-yellow-400 rounded-full px-2 py-1">
          <Text className="text-base font-bold text-gray-800">26/30</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
console.log("🚀 ~ QuizCard ~ QuizCard:", QuizCard);

export default QuizCard;
