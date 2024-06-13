import { StyleSheet, Text, View } from "react-native";
import React from "react";

const kittyGif = () => {
  return (
    <View style={styles.container}>
      <Text>We will see gifs of kitties here!</Text>
    </View>
  );
};

export default kittyGif;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
