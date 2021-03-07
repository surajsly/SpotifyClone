import React from "react";
import { View, Image, Text, TouchableWithoutFeedback } from "react-native";
import styles from "./styles";
import { song } from "../../types";

export type SongListItemProps = {
  song: song;
};

const SongListItem = (props: SongListItemProps) => {
  const { song } = props;

  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Image source={{ uri: song.imageUri }} style={styles.image} />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{song.title}</Text>
          <Text style={styles.artist}>{song.artist}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SongListItem;
