import {
  ActivityIndicator,
  Button,
  Image,
  Pressable,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styling";

type CatResponse = {
  id: string;
  url: string;
  width: number;
  height: number;
};

const kitty = () => {
  const [isLoading, setLoading] = useState(true);
  const [imageSourceURL, setImageSourceURL] = useState<string>("");
  const [secondImageSourceURL, setSecondImageSourceURL] = useState<string>("");

  //Fetches cat image from API and extracts the URL
  const getCatPic = async () => {
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=10"
      )
        .then((response) => response.json())
        .then((result: CatResponse[]) => {
          setImageSourceURL(result[0].url);
          setSecondImageSourceURL(result[1].url);
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
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Image style={styles.image} source={{ uri: secondImageSourceURL }} />
      )}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={getCatPic}>
          <Text style={styles.text}>
            Tap here for another dose of cuteness!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default kitty;
