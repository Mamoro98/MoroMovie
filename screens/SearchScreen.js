import SearchComponent from "../components/SearchComponent";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useCallback, useState } from "react";
import { XMarkIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";
import { fetchSeachMovies, imagesBaseUrl185 } from "../api/moviedb";
import { debounce } from "lodash";
import { noImageAddress } from "../constants";

const SearchScreen = () => {
  let { width, height } = Dimensions.get("window");
  const nav = useNavigation();
  const [result, setresult] = useState([]);
  const [loading, setloading] = useState(false);
  let movieName = "The Avengers EndGame ";

  const handleSearch = (value) => {
    if (value && value.length > 2) {
      setloading(true);
      fetchSeachMovies({
        query: value,
        include_adult: false,
        language: "en-US",
        page: "1",
      }).then((data) => {
        setloading(false);
        if (data && data.results) setresult(data.results);
      });
    } else {
      setloading(false);
      setresult([]);
    }
  };

  const handleTextDebounce = useCallback(debounce(handleSearch, 400), []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 100 }}
      className="space-y-2 px-4 bg-neutral-900 flex-1 pt-12"
    >
      <View>
        <SearchComponent handleSearch={handleTextDebounce} />

        <Text className="text-white mt-4 text-base">
          Results ({result.length})
        </Text>
        {result.length > 0 ? (
          <View className="flex-row justify-between flex-wrap ">
            {result.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => nav.navigate("Movie", item)}
                  className="my-2 items-center"
                >
                  <Image
                    className="rounded-3xl"
                    // source={require("../assets/images/moviePoster2.png")}
                    source={{
                      uri:
                        imagesBaseUrl185(item?.poster_path) || noImageAddress,
                    }}
                    style={{
                      width: width * 0.44,
                      height: height * 0.3,
                    }}
                  />
                  <Text className="text-white">
                    {item?.title.length > 22
                      ? item?.title.slice(0, 22) + "..."
                      : item?.title}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ) : (
          <View className="justify-center items-center">
            <Image
              source={require("../assets/images/movieTime.png")}
              className="w-96 h-96"
            />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default SearchScreen;
