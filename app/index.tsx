import { Text, View } from "react-native";
import { AppScreen } from "../components/AppScreen";

export default function Index() {
  return (
    <AppScreen title="Home">
        <View className="flex-1 items-center justify-center bg-yellow-200">
        <Text className="text-xl font-bold text-green-600">
          Welcome to the Home Screen!
        </Text>
      </View>
    </AppScreen>
   
  );
}