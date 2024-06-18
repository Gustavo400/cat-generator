import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";

type Image = {
  id: string;
  url: string;
  width: number;
  height: number;
};

const kitty = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Image[]>([]); //DONT FORGET TO FIX

  //Fetching single cat image from api and controlling loading state
  const getCatPic = async () => {
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search"
      );
      console.log("json data");
      console.log(response);
      const blob = await response.blob();
      console.log("blob data");
      console.log(blob);
    } catch (error) {
      console.error();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCatPic();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => <Text>idk</Text>}
          />
        )}
      </View>
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
