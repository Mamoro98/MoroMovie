import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { styles } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";
import { imagesBaseUrl185 } from "../api/moviedb";

const MovieList = ({ data, title, showSeeAllBtn = true }) => {
  const nav = useNavigation();
  let { width, height } = Dimensions.get("window");
  let movieName = "The Avengers EndGame";
  return (
    <View className="flex-col">
      <View className="mx-5 mt-5 items-center flex-row justify-between">
        <Text className="text-white text-xl">{title}</Text>
        {showSeeAllBtn && (
          <Text className="text-lg" style={{ color: styles.text.color }}>
            See All
          </Text>
        )}
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => nav.navigate("Movie", item)}
              key={index}
            >
              <View className="mx-2 flex-col items-center mt-5">
                <Image
                  source={{ uri: imagesBaseUrl185(item.poster_path) }}
                  style={{
                    width: width * 0.33,
                    height: height * 0.22,
                  }}
                  className="rounded-3xl"
                />
                <Text className="text-white mt-1">
                  {item.title.length > 14
                    ? item.title.slice(0, 14) + "..."
                    : item.title}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MovieList;
