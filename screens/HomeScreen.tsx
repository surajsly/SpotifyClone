import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import image from "../assets/images/icon.png";

import EditScreenInfo from "../components/EditScreenInfo";

import Album from "../components/Album";

const album = {
  id: "1",
  imageUrl: image,
  artistHeadline: "Taylor Swift , king , margin",
};

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Album album={album} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
