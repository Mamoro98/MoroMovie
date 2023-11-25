import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { ChevronLeftIcon, HeartIcon } from "react-native-heroicons/solid";
import { styles } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";
import Cast from "../components/Cast";
import { ScrollView } from "react-native";
import MovieList from "../components/MovieList";

const MovieScreen = () => {
  let { width, height } = Dimensions.get("window");
  let movieName = "The Avengers EndGame";
  const [cast, setcast] = useState([1, 2, 3, 4, 5]);

  const nav = useNavigation();
  return (
    <ScrollView>
      <View className="bg-neutral-900 ">
        <View className=" absolute  w-full top-14 flex-row justify-between px-4 ">
          <TouchableOpacity
            onPress={() => nav.goBack()}
            className=" rounded-lg p-1 items-center justify-center"
            style={{
              backgroundColor: styles.text.color,
            }}
          >
            <ChevronLeftIcon size={30} strokeWidth={2} color={"white"} />
          </TouchableOpacity>
          <HeartIcon size={40} strokeWidth={2} color={"white"} />
        </View>
        <View>
          <Image
            source={require("../assets/images/moviePoster2.png")}
            className="  -z-10"
            style={{ width: width, height: height * 0.55 }}
          />
          <LinearGradient
            colors={["transparent", "rgba(23,23,23,0.8)", "rgba(23,23,23,1)"]}
            style={{ width: width, height: height * 0.4 }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className="absolute bottom-0"
          />
        </View>
        <View className="justify-center items-center -mt-20 px-[5%]">
          <Text className="text-white text-3xl font-medium ">{movieName}</Text>
          <Text className="text-[#e6e6e6] opacity-40 text-base mt-4 font-medium ">
            Released . 2020 . 170 min
          </Text>
          <Text className="text-[#e6e6e6] opacity-40 text-base mt-4 font-medium ">
            Action . Thrill . Comedy
          </Text>
          <Text className="text-[#e6e6e6] opacity-40 text-sm mt-4 font-medium ">
            Anim reprehenderit duis reprehenderit aliquip minim elit enim cillum
            id do labore. Veniam mollit consectetur est consectetur anim
            excepteur. Qui officia nisi labore veniam est magna sit sint aute ea
            laborum nostrud reprehenderit. Veniam ut enim fugiat officia culpa
            aute commodo ad eiusmod aliqua adipisicing in. Elit elit
            reprehenderit nisi labore quis non. Amet eiusmod ad tempor dolore
            minim officia adipisicing ut dolor ut labore. Et ad est exercitation
            incididunt labore sint.
          </Text>
        </View>
        <Cast cast={cast} />
        <MovieList title="Similar Movies" data={cast} />
      </View>
    </ScrollView>
  );
};

export default MovieScreen;
