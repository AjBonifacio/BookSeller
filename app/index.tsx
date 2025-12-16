import { Text, View,Button } from "react-native";
import { AppScreen } from "../components/AppScreen";

export default function Index() {
  return (
    <AppScreen title="Home">
        <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-xl font-bold text-green-600">
            BookSeller
        </Text>
        <Button title="+" onPress={() => alert('Add new book')} />
        </View>
    </AppScreen>
   
  );
}