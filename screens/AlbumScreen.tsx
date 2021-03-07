import React, { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import SongListItem from "../components/SongListItem";
import albumDetail from "../data/albumDetail";
import AlbumHeader from "../components/AlbumHeader";

const AlbumScreen = () => {
  const route = useRoute();

  return (
    <View>
      <FlatList
        data={albumDetail.songs}
        renderItem={({ item }) => <SongListItem song={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <AlbumHeader album={albumDetail} />}
      />
    </View>
  );
};

export default AlbumScreen;
