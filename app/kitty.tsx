import {
  ActivityIndicator,
  Button,
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

  //Fetches cat image from API and extracts the URL
  const getCatPic = async () => {
    try {
      const response = await fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => response.json())
        .then((result: CatResponse[]) => {
          setImageSourceURL(result[0].url);
        });
    } catch (error) {
      console.error();
    } finally {
      setLoading(false);
    }
  };

  //Awaits getCatPic as long as it is still loading the picture
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
      <View style={styles.button}>
        <Button
          onPress={getCatPic}
          title="Tap for a new feline friend!"
          color="#FFBB00"
          accessibilityLabel="Refresh button"
        ></Button>
      </View>
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
    width: "90%",
    height: "50%",
    marginVertical: 25,
  },
  button: {
    flex: 1,
  },
});
