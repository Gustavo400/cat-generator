import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import styles from "./styling";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "IrishGrover-Regular": require("../assets/fonts/IrishGrover-Regular.ttf"),
  });

  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text>This is where the Logo will go</Text>
      </View>
      <View style={styles.textBox}>
        <Text style={styles.text}>
          About Me: This app was designed with a single purpose in mind; to
          bring the presence of fluffy friends from all over the world to the
          palm of your hand. Enjoy looking at endless adorable-ness wherever,
          whenever. Congratulations! You are now forever 1-2 taps away from
          seeing a precious feline baby (all cats are babies).
        </Text>
      </View>
      <StatusBar style="auto" />
      <Link href="/kitty" style={styles.button}>
        Let's go see some Kitties!
      </Link>
    </View>
  );
}
