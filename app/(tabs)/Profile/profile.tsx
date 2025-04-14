import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function ProfileScreen() {
  return (
    <View className="flex-1 bg-[#1E2333] p-4">
      {/* Header */}
      <View className="bg-[#131827] p-3 rounded-lg items-center relative">
        {/* Avatar */}
        <Image
            source={{ uri: "https://i.pravatar.cc/100"}}
            className="w-16 h-16 rounded-full"
        />
        {/* Thông tin bên phải */}
        <View className="ml-4">
            <Text className="text-white text-lg font-bold">Nguyễn Văn B</Text>
            <View className="mt-1 bg-yellow-400 px-2 py-1 rounded-md self-start">
            <Text className="text-black text-sm font-bold">Premium</Text>
            </View>
        </View>
        {/* Edit Icon */}
        <TouchableOpacity className="absolute top-4 right-4">
          <Feather name="edit" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Info Section */}
      <View className="bg-[#2D3250] p-4 rounded-lg mt-4">
        <ProfileInfo label="Đang theo học tại:" value="Đại học điện lực" />
        <ProfileInfo label="Cấp:" value="Đại học" />
        <ProfileInfo label="Trình độs học vấn:" value="Sinh viên năm 3" />
        <ProfileInfo label="Chuyên ngành:" value="Công nghệ phần mềm" />
        <ProfileInfo label="Email:" value="Abc@gmail.com" />
      </View>

      {/* Logout Button */}
      <TouchableOpacity className="bg-red-600 py-3 rounded-lg mt-6">
        <Text className="text-center text-white font-bold text-lg">Đăng xuất</Text>
      </TouchableOpacity>
    </View>
  );
}

interface ProfileInfoProps {
  label: string;
  value: string;
}

const ProfileInfo = ({ label, value }: ProfileInfoProps) => (
  <View className="border-b border-gray-600 py-2">
    <Text className="text-white font-bold">{label}</Text>
    <Text className="text-gray-300">{value}</Text>
  </View>
);