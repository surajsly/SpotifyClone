import React, { useEffect, useState } from "react";
import { Text, Image, View } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Audio } from "expo-av";

import styles from "./styles";
import { Sound } from "expo-av/build/Audio";
import { getNativeSourceAndFullInitialStatusForLoadAsync } from "expo-av/build/AV";
import { TouchableOpacity } from "react-native-gesture-handler";

const song = {
  id: "1",
  uri:
    "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3",
  imageUri:
    "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
  title: "High on You",
  artist: "Helen",
};

const PlayerWidget = () => {
  const [sound, setSound] = useState<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const onPlaybackStatusUpdate = (status) => {
    setIsPlaying(status.isPlaying);
    console.log(status);
  };

  const playCurrentSong = async () => {
    if (sound) {
      await sound.unloadAsync();
    }

    const { sound: newSound } = await Audio.Sound.createAsync(
      { uri: song.uri },
      {
        shouldPlay: isPlaying,
      },
      onPlaybackStatusUpdate
    );
    setSound(newSound);
  };

  const onPlayPausePress = async () => {
    if (!sound) {
      return;
    }
    if (isPlaying) {
      await sound.stopAsync();
    } else {
      await sound.playAsync();
    }
  };

  useEffect(() => {
    //play the song
    playCurrentSong();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={{ uri: song.imageUri }} style={styles.image} />
      <View style={styles.rightContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.title}>{song.title}</Text>
          <Text style={styles.artist}>{song.artist}</Text>
        </View>

        <View style={styles.iconsContainer}>
          <AntDesign name="hearto" size={30} color={"white"} />
          <TouchableOpacity onPress={onPlayPausePress}>
            <FontAwesome
              name={isPlaying ? "pause" : "play"}
              size={30}
              color={"white"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PlayerWidget;
