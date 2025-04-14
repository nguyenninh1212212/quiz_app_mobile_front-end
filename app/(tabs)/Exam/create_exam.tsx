import React, { useState } from "react";
import { ScrollView, View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";

export default function CreateExamScreen() {
  const router = useRouter();
  
  // State cho các giá trị nhập vào
  const [school, setSchool] = useState("");
  const [level, setLevel] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 bg-primary_200 px-6 py-4 mb-16">
        {/* Header */}
        <Text className="text-white text-2xl font-bold text-center mb-4">
            Tạo đề thi
        </Text>

        {/* Ảnh minh họa */}
        <View className="bg-gray-300 rounded-lg items-center justify-center p-6">
            <Feather name="image" size={100} color="gray" />
        </View>
        <TouchableOpacity className="self-end mt-2">
            <Text className="text-blue-400">Thêm từ máy ?</Text>
        </TouchableOpacity>

        {/* Form nhập liệu */}
        <View className="bg-white p-4 rounded-xl mt-4">
            {/* Trường học */}
            <Text className="text-gray-700">Trường học</Text>
            <View className="border border-gray-400 rounded-md mt-1">
            <Picker selectedValue={school} onValueChange={(item) => setSchool(item)}>
                <Picker.Item label="--Chọn trường--" value="" />
                <Picker.Item label="Trường A" value="A" />
                <Picker.Item label="Trường B" value="B" />
            </Picker>
            </View>

            {/* Trình độ */}
            <Text className="text-gray-700 mt-4">Trình độ</Text>
            <View className="border border-gray-400 rounded-md mt-1">
            <Picker selectedValue={level} onValueChange={(item) => setLevel(item)}>
                <Picker.Item label="--Trình độ--" value="" />
                <Picker.Item label="Cấp 1" value="1" />
                <Picker.Item label="Cấp 2" value="2" />
                <Picker.Item label="Cấp 3" value="2" />
                <Picker.Item label="Đại học/Cao đẳng" value="2" />
            </Picker>
            </View>

            {/* Môn học */}
            <Text className="text-gray-700 mt-4">Môn học</Text>
            <View className="border border-gray-400 rounded-md mt-1">
            <Picker selectedValue={subject} onValueChange={(item) => setSubject(item)}>
                <Picker.Item label="--Môn học--" value="" />
                <Picker.Item label="Toán" value="math" />
                <Picker.Item label="Lý" value="physics" />
                <Picker.Item label="Hóa" value="physics" />
            </Picker>
            </View>
        </View>

        {/* Nội dung đề thi */}
        <View className="bg-white p-4 rounded-xl mt-4">
            <Text className="text-gray-700">Nội dung</Text>
            <TextInput
            multiline
            numberOfLines={20}
            placeholder="Viết câu hỏi và câu trả lời, câu trả lời đúng sẽ được đánh dấu bằng dấu * vào đây"
            className="border border-gray-400 rounded-md mt-1 p-2 text-gray-700"
            value={content}
            onChangeText={setContent}
            style={{ minHeight: 150 }}
            />
        </View>

        {/* Nút xác nhận */}
        <TouchableOpacity className="bg-yellow-400 py-3 rounded-lg mt-6">
            <Text className="text-center text-white font-bold text-lg">Xác nhận</Text>
        </TouchableOpacity>
        </View>
    </ScrollView>
  );
}
