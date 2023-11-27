import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { imagesBaseUrl500 } from "../api/moviedb";

const MovieCard = ({ item, handleClick }) => {
  let { width, height } = Dimensions.get("window");

  return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
      <Image
        style={{
          width: width * 0.6,
          height: height * 0.4,
        }}
        source={{ uri: imagesBaseUrl500(item.poster_path) }}
        className=" rounded-2xl"
      />
    </TouchableWithoutFeedback>
  );
};

export default MovieCard;

const styles = StyleSheet.create({});
