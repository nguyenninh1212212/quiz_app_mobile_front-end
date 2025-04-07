import { useRouter } from "expo-router";
import React from "react";
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, StyleSheet, FlatList } from "react-native";
import { Avatar } from "react-native-paper";
import QuizCard from "../Card/QuizCard"; // Adjust the import path as needed
import { Ionicons } from "@expo/vector-icons"; // Make sure to install expo/vector-icons
import { fakeQuizCreatedData } from "@/fakedata";
import QuizCardCreate from "@/components/Card/QuizCardCreate";
const ChannelScreen = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      {/* Curved header section */}
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <Ionicons name="chevron-back" size={28} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Người tạo đề</Text>
        </View>
        
        <View style={styles.profileContainer}>
          <Avatar.Image 
            size={120} 
            source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }} 
            style={styles.avatar}
          />
          <Text style={styles.userName}>Trần Thị A</Text>
        </View>
      </View>
      
      {/* Content section */}
      <View style={styles.contentContainer}>
        <Text style={styles.sectionTitle}>Đề thi</Text>
        <View className="flex-1 bg-[#303b5f] rounded-t-3xl px-4 pt-4 mx-[5px]">
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <QuizCard key={index} data={_} />
              ))}
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#404f77",
  },
  headerContainer: {
    backgroundColor: "#000947", // Dark blue as seen in your image
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingBottom: 20,
    overflow: 'hidden',
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
    marginRight: 40, // Adjust to balance the back button
  },
  profileContainer: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  avatar: {
    backgroundColor: "#e0e0e0",
    marginBottom: 12,
  },
  userName: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  contentContainer: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    marginTop: 8,
    color:"#ffff"
  },
});

export default ChannelScreen;