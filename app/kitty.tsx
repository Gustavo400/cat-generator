import { StyleSheet, Text, View } from "react-native";
import React from "react";

const kitty = () => {
  return (
    <View style={styles.container}>
      <Text>Kitties will go here!</Text>
    </View>
  );
};

export default kitty;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
