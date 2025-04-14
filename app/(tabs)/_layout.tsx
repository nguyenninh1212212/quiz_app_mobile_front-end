import { router, Tabs } from "expo-router";
import React, { useState } from "react";
import { View, Platform, ViewStyle, TouchableOpacity } from "react-native";
import { HapticTab } from "@/components/HapticTab";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [activeTab, setActiveTab] = useState<string>("Home");

  const change = (focus: boolean) => {
    return focus ? "#ffd800" : "white";
  };
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: Platform.select({
          default: styles,
        }),
      }}
      screenListeners={{
        state: (e) => {
          const index = e.data.state.index;
          const routeName = e.data.state.routeNames[index];
          setActiveTab(routeName);
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="home" size={30} color={change(focused)} />
          ),
        }}
      />

      <Tabs.Screen
        name="Library"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="folder-sharp" size={30} color={change(focused)} />
          ),
        }}
      />

      <Tabs.Screen
        name="Exam"
        options={{
          tabBarIcon: () => (
            <TouchableOpacity onPress={() => router.push("/(tabs)/Exam/create_exam")}>
              <View
                className="bg-[#454e91] h-20 items-center w-20 justify-center relative -top-7 rounded-full"
              >
                <View className="h-16 w-16 bg-[#ffd800] items-center justify-center rounded-full">
                  <Ionicons name="add" size={50} color={"white"} />
                </View>
              </View>
            </TouchableOpacity>
          ),
        }}
      />

      <Tabs.Screen
        name="Notification"
        options={{
          tabBarIcon: ({ focused }) => (
              <Ionicons name="notifications" size={30} color={change(focused)} />
          ),
        }}
      />

      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity onPress={() => router.push({ pathname: "/(tabs)/Profile/profile" })}>
            <Ionicons name="person-sharp" size={30} color={change(focused)} />
            </TouchableOpacity>
          ),
        }}
      />
    </Tabs>
  );
}

const styles: ViewStyle = {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  borderTopWidth: 0,
  shadowColor: "#000",
  shadowOffset: { width: 4, height: 4 },
  shadowOpacity: 0.1,
  shadowRadius: 5,
  backgroundColor: "#454e91",
};
