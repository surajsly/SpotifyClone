import React, { useEffect } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { AlbumType } from "../../types";
import styles from "./styles";

export type AlbumHeaderProps = {
  album: AlbumType;
};

const AlbumHeader = (props: AlbumHeaderProps) => {
  const { album } = props;
  return (
    <View style={styles.container}>
      <Image source={{ uri: album.imageUri }} style={styles.image} />
      <Text style={styles.name}>{album.name}</Text>
      <View style={styles.creatorContainer}>
        <Text style={styles.creator}>By {album.by}</Text>
        <Text style={styles.likes}>{album.numberOfLikes} Likes</Text>
      </View>
      <TouchableOpacity style={styles.play}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Play</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AlbumHeader;
