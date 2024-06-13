import { StatusBar, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>First step toward Kitty Central!</Text>
      <StatusBar />
      <Link href="/kitty" style={{ color: "blue" }}>
        Let's go see kitties!
      </Link>
      <Link href="/kittyGif" style={{ color: "green" }}>
        Or we can see gifs of kitties!
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
