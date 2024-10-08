import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import Icon from "react-native-vector-icons/FontAwesome"; // Example with FontAwesome

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Accounts"
        options={{
          title: "Accounts",
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? "line-chart" : "line-chart"}
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Add"
        options={{
          title: "Add",
          tabBarIcon: ({ color, focused }) => (
            <Icon name={focused ? "plus" : "plus"} color={color} size={30} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <Icon name={focused ? "male" : "male"} color={color} size={30} />
          ),
        }}
      />
    </Tabs>
  );
}
