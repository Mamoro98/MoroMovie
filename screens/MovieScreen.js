import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, HeartIcon } from "react-native-heroicons/solid";
import { styles } from "../theme";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";
import Cast from "../components/Cast";
import { ScrollView } from "react-native";
import MovieList from "../components/MovieList";
import {
  fetchMovieCredits,
  fetchMovieDetails,
  fetchSimilarMovie,
  imagesBaseUrl500,
} from "../api/moviedb";
import Loading from "../components/Loading";
import { StatusBar } from "expo-status-bar";
import { noImageAddress } from "../constants";

const MovieScreen = () => {
  const { params: item } = useRoute();
  let { width, height } = Dimensions.get("window");
  let movieName = "The Avengers EndGame";
  const [cast, setcast] = useState([1, 2, 3, 4, 5]);
  const [loading, setloading] = useState(false);
  const [movie, setmovie] = useState({});
  const [credits, setcredits] = useState({});
  const [similar, setsimilar] = useState({});

  const getMovieDetails = async (id) => {
    const data = await fetchMovieDetails(id);
    if (data) {
      setmovie(data);
      setloading(false);
    }
  };

  const getMovieCredit = async (id) => {
    const data = await fetchMovieCredits(id);
    if (data) setcredits(data.cast);
  };

  const getSimilarMovies = async (id) => {
    const data = await fetchSimilarMovie(id);
    if (data) setsimilar(data.results);
  };

  useEffect(() => {
    setloading(true);
    getMovieDetails(item.id);
    getMovieCredit(item.id);
    getSimilarMovies(item.id);
  }, [item]);

  const nav = useNavigation();
  return (
    <ScrollView>
      <View
        className="flex-1 bg-neutral-800  "
        style={{ paddingTop: StatusBar.length }}
      >
        {loading ? (
          <Loading />
        ) : (
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
                // source={require("../assets/images/moviePoster2.png")}
                source={{
                  uri: imagesBaseUrl500(movie?.poster_path) || noImageAddress,
                }}
                className="  -z-10"
                style={{ width: width, height: height * 0.55 }}
              />
              <LinearGradient
                colors={[
                  "transparent",
                  "rgba(23,23,23,0.8)",
                  "rgba(23,23,23,1)",
                ]}
                style={{ width: width, height: height * 0.4 }}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                className="absolute bottom-0"
              />
            </View>
            <View className="justify-center items-center -mt-20 px-[5%]">
              <Text className="text-white text-3xl font-medium ">
                {movie?.title}
              </Text>
              {movie?.id ? (
                <Text className="text-[#e6e6e6] opacity-40 text-base mt-4 font-medium ">
                  {movie?.status} · {movie?.release_date.split("-")[0]} ·{" "}
                  {movie?.runtime} mins
                </Text>
              ) : null}
              <View className="flex flex-row justify-center">
                {movie?.genres?.map((genre, index) => {
                  let showDot = index + 1 != movie.genres.length;
                  return (
                    <Text
                      key={index}
                      className="text-[#e6e6e6] opacity-40 text-base mt-4 font-medium "
                    >
                      {genre?.name} {showDot ? " · " : null}
                    </Text>
                  );
                })}
              </View>

              <Text className="text-[#e6e6e6] opacity-40 text-sm mt-4 font-medium ">
                {movie?.overview}
              </Text>
            </View>
            {credits.length > 0 ? (
              <Cast cast={credits} />
            ) : (
              <Loading w={100} h={100} s={50} t={5} />
            )}
            {similar.length > 0 ? (
              <MovieList title="Similar Movies" data={similar} />
            ) : (
              <Loading w={100} h={100} s={50} t={5} />
            )}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default MovieScreen;
