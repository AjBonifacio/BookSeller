import { View } from "react-native";
import { Stack } from "expo-router";
import React from "react";

export const AppScreen = ({title, children}: {title: string, children: React.ReactNode}) => {
  return (
        <>
         <Stack.Screen options={{ title }} />
         <View className="flex-1">
                <View className="flex-1 px-4 bg-blue-500">{children}</View>
         </View>
        </>
  );
};