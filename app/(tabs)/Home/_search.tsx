import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import QuizCard from "@/components/Card/QuizCard";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-[#0C1D57] p-4 pt-20">
      {/* Thanh tìm kiếm */}
      <View className="p-4">
        <View className="flex-row items-center bg-white p-3 rounded-lg mb-3">
          <TextInput
            placeholder="Search"
            value={searchText}
            onChangeText={setSearchText}
            className="flex-1 text-black"
          />
          <TouchableOpacity>
            <Ionicons name="search" size={20} color="black" />
          </TouchableOpacity>
        </View>

        {/* Các bộ lọc */}
        <View className="flex-row justify-between mb-4">
          <TouchableOpacity className="bg-yellow-500 px-4 py-2 rounded-lg">
            <Text className="text-black font-bold">Mới nhất</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-gray-500 px-4 py-2 rounded-lg">
            <Text className="text-white font-bold">Cơ bản</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-yellow-800 px-4 py-2 rounded-lg">
            <Text className="text-white font-bold">Tìm nhiều nhất</Text>
          </TouchableOpacity>
        </View>

        {/* Kết quả tìm kiếm */}
        <Text className="text-white font-bold text-lg mb-3">Kết quả</Text>
        <ScrollView className="space-y-3">
          {[...Array(4)].map((_, index) => (
            <QuizCard key={index }  />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
