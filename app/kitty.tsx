import {
  ActivityIndicator,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";

type CatResponse = {
  id: string;
  url: string;
  width: number;
  height: number;
};

const kitty = () => {
  const [isLoading, setLoading] = useState(true);
  const [imageSourceURL, setImageSourceURL] = useState<string>("");

  const getCatPic = async () => {
    try {
      const response = await fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => response.json())
        .then((result: CatResponse[]) => {
          setImageSourceURL(result[0].url);
          console.log(imageSourceURL);
        });
    } catch (error) {
      console.error();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCatPic();
  }, [isLoading]);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Image style={styles.image} source={{ uri: imageSourceURL }} />
      )}
      <Text style={styles.text}>This is where kitties will go!</Text>
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
  image: {
    flex: 1,
    width: 500,
    height: 500,
  },
  text: {
    flex: 1,
  },
});
