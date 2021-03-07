import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
  name: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  creatorContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  creator: {
    color: "lightgrey",
    margin: 5,
    fontSize: 20,
  },
  likes: {
    color: "grey",
    margin: 5,
    fontSize: 20,
  },
  button: {
    backgroundColor: "#1CD05D",
    height: 50,
    width: 175,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default styles;
