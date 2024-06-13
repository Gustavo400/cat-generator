import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl">First step toward Kitty Central!</Text>
      <StatusBar style="auto" />
      <Link href="/kitty" className="text-blue-600">
        Let's go see kitties!
      </Link>
      <Link href="/kittyGif" className="text-green-600">
        Or we can see gifs of kitties!
      </Link>
    </View>
  );
}
