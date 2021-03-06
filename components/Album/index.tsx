import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";

export type AlbumProps = {
  album: { id: string; imageUrl: string; artistHeadline: string };
};

const Album = (props: AlbumProps) => {
  return (
    <View style={styles.container}>
      <Image source={props.album.imageUrl} style={styles.image} />
      <Text style={styles.text}>{props.album.artistHeadline}</Text>
    </View>
  );
};

export default Album;
