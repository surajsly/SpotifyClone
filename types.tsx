export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  name: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
  AlbumScreen: undefined;
  name: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type AlbumType = {
  id: string;
  imageUri: string;
  name: string;
  artistsHeadline: string;
  by: string;
  numberOfLikes: undefined;
};

export type song = {
  id: string;
  imageUri: string;
  title: string;
  artist: string;
};
