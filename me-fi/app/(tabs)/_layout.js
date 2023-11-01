import { FontAwesome } from "@expo/vector-icons";
import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { Tabs } from "expo-router";
import React from "react";
import { Platform, View, Text } from "react-native";

export default function TabsLayout() {

  return (
    <Tabs
      initialRouteName="map"
      screenOptions={{
        tabBarStyle:
          Platform.OS === "ios"
            && {
                backgroundColor: "transparent",
              },
        headerShown: false,
      }}
      tabBar={(props) =>
        Platform.OS === "ios" ? (
            <BottomTabBar {...props} />
        ) : (
          <BottomTabBar {...props} />
        )
      }
    >
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: true,
          tabBarActiveTintColor: "black",
          href: {
            pathname: "/profile",
          },
          tabBarIcon: ({ focused,color }) => (
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                marginTop: 17,
                backgroundColor: "transparent",
              }}
            >
              <TabBarIcon name="user" color={color} focused={focused} size={24} />
              <Text></Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="group"
        options={{
          href: "/group",
          title: "Groups",
          tabBarActiveTintColor: "black",
          headerShown: true,
          tabBarIcon: ({ focused,color }) => (
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                marginTop: 17,
                backgroundColor: "transparent",
              }}
            >
              <TabBarIcon name="group" color={color} focused={focused} size={24} />
              <Text></Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          href: "/map",
          title: "Map",
          tabBarActiveTintColor: "black",
          headerShown: true,
          tabBarIcon: ({ focused,color }) => (
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                marginTop: 17,
                backgroundColor: "transparent",
              }}
            >
              <TabBarIcon name="map" color={color} focused={focused} size={24} />
              <Text></Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="journal"
        options={{
          href: "journal",
          title: "Journal",
          tabBarActiveTintColor: "black",
          headerShown: true,
          tabBarIcon: ({ focused,color }) => (
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                marginTop: 17,
                backgroundColor: "transparent",
              }}
            >
              <TabBarIcon name="sticky-note" color={color} focused={focused} size={24} />
              <Text></Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          href: "/settings",
          title: "Settings",
          tabBarActiveTintColor: "black",
          headerShown: true,
          tabBarIcon: ({ focused,color }) => (
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                marginTop: 17,
                backgroundColor: "transparent",
              }}
            >
              <TabBarIcon name="gear" color={color} focused={focused} size={24} />
              <Text></Text>
            </View>
          ),
        }}
      />
      
    </Tabs>
  );
}

function TabBarIcon(props) {
  return (
    <FontAwesome
      size={props.size || 26}
      style={{ marginBottom: -3, color: props.focused ? "black" : "gray"}}
      {...props}
    />
  );
}