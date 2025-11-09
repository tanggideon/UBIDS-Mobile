import { icons } from "@/constants/icons";
import { Tabs } from "expo-router";
import React from "react";
import { Image, View } from "react-native";

const TabIcon = ({ focused, focusedIcon, title, icon }: any) => {
  return (
    <View className="flex flex-1 items-center flex-row justify-center min-w-[112px] overflow-hidden gap-2 ">
      <Image
        source={focused ? focusedIcon : icon}
        tintColor={focused ? "#d1d5db" : "#3b82f6"}
      />
    </View>
  );
};

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "PoppinsMedium",
          color: "#d1d5db",
        },
        headerShown: false,
        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#1d4ed8",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focusedIcon={icons.dashboard_filled}
              focused={focused}
              icon={icons.dashboard}
              title="Dashboard"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="courses"
        options={{
          title: "Courses",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focusedIcon={icons.book_filled}
              focused={focused}
              icon={icons.book}
              title="Courses"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="results"
        options={{
          title: "Results",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focusedIcon={icons.result_filled}
              focused={focused}
              icon={icons.result}
              title="Courses"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focusedIcon={icons.profile_filled}
              focused={focused}
              icon={icons.profile1}
              title="Profile"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
