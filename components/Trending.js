import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Carousel from "react-native-snap-carousel";
import MovieCard from "./MovieCard";
import { useNavigation } from "@react-navigation/native";

const Trending = ({ trending }) => {
  let { width, height } = Dimensions.get("window");
  const nav = useNavigation();
  function handleClick({ item }) {
    nav.navigate("Movie", item);
  }
  return (
    <View className=" flex-col ">
      <Text className="m-5 text-white text-xl mb-5">Trending</Text>
      <Carousel
        data={trending}
        renderItem={({ item }) => (
          <MovieCard item={item} handleClick={handleClick} />
        )}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{
          alignItems: "center",
          overflow: "visible",
        }}
      />
    </View>
  );
};

export default Trending;

const styles = StyleSheet.create({});
