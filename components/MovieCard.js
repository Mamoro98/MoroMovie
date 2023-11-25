import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";

const MovieCard = ({ item, handleClick }) => {
  let { width, height } = Dimensions.get("window");

  return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
      <Image
        style={{
          width: width * 0.6,
          height: height * 0.4,
        }}
        source={require("../assets/images/moviePoster1.png")}
        className=" rounded-2xl"
      />
    </TouchableWithoutFeedback>
  );
};

export default MovieCard;

const styles = StyleSheet.create({});
