import * as React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import image from "../assets/images/icon.png";

import EditScreenInfo from "../components/EditScreenInfo";

import Album from "../components/Album";
import AlbumCategory from "../components/AlbumCatagory";

import albumcatagories from "../data/dataCategories";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={albumcatagories}
        renderItem={({ item }) => (
          <AlbumCategory title={item.title} albums={item.albums} />
        )}
        keyExtractor={(item) => item.id}
      />
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
