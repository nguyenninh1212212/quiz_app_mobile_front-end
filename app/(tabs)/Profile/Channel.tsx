import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
} from "react-native";
import QuizCard from "@/components/Card/QuizCard";
import { fakeQuizData } from "@/fakedata";

interface IUser {
    name: string;
    university: string;
    avatar: string;
  }
  
  interface IQuiz {
    id: string;
    title: string;
    author: IUser;
    institution: string;
    views: number;
    likes: number;
    participants: number;
    score: string;
    icon: string;
  }
  
  const Channel = () => {
  return (
    
    <FlatList
    className="bg-red-500 flex justify-center"
    data={fakeQuizData}
    renderItem={({ item }) => (
      <View className="px-2">
        <QuizCard data={item} />
      </View>
    )}
    keyExtractor={(item) => item.id}
    contentContainerStyle={styles.listContainer}
  />
  );
};

const styles = StyleSheet.create({
    listContainer: {
        
    },
});
export default Channel;

