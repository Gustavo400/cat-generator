import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import styles from "./styling";

export default function App() {
  return (
    <View style={styles.container}>
      <Text className="text-2xl text-title">
        First step toward Kitty Central!
      </Text>
      <StatusBar style="auto" />
      <Link href="/kitty" className="text-blue-600">
        Let's go see kitties!
      </Link>
    </View>
  );
}
