import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, HeartIcon } from "react-native-heroicons/solid";
import { styles } from "../theme";
import { useNavigation, useRoute } from "@react-navigation/native";
import MovieList from "../components/MovieList";
import {
  fetchPeronDetails,
  fetchPersonMovies,
  imagesBaseUrl185,
  imagesBaseUrl342,
} from "../api/moviedb";
import Loading from "../components/Loading";
import { StatusBar } from "expo-status-bar";
import { noImageAddress } from "../constants";

const PersonScreen = () => {
  const { params: item } = useRoute();
  const nav = useNavigation();
  const peronname = "Andrew Tate";
  const [loading, setloading] = useState(false);

  const [person, setperson] = useState({});
  const [personMovies, setpersonMovies] = useState([]);

  const getPersonDetails = async (id) => {
    const data = await fetchPeronDetails(id);
    if (data) {
      setperson(data);
      setloading(false);
    }
  };

  const getPersonMovies = async (id) => {
    const data = await fetchPersonMovies(id);
    if (data) {
      setpersonMovies(data.cast);
    }
  };

  useEffect(() => {
    setloading(true);
    getPersonDetails(item.id);
    getPersonMovies(item.id);
  }, [item]);

  return (
    <ScrollView>
      <View
        className="flex-1 bg-neutral-800  "
        style={{ paddingTop: StatusBar.length }}
      >
        {loading ? (
          <Loading />
        ) : (
          <View className="bg-neutral-900 flex-1 ">
            <View className=" absolute   w-full top-14 flex-row justify-between px-4 ">
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
            <View className="justify-center items-center mt-[30%]">
              <View className=" overflow-hidden border-2 border-white rounded-full w-[250]">
                <Image
                  // source={require("../assets/images/castImage1.png")}
                  source={{
                    uri:
                      imagesBaseUrl342(person?.profile_path) || noImageAddress,
                  }}
                  className="rounded-full w-[250] h-[250]"
                />
              </View>
            </View>
            <View className="justify-center items-center mt-2">
              <Text className="text-white text-3xl font-semibold ">
                {person?.name}
              </Text>
              <Text className="text-[#e6e6e6] opacity-40 text-sm mt-2 font-medium  ">
                {person?.place_of_birth}
              </Text>
            </View>
            <View className="w-[90%] justify-evenly px-4 items-center self-center mt-5 bg-neutral-700 h-20 rounded-full flex-row ">
              <View className="flex-col  border-r-2 pr-2 border-white">
                <Text className="text-white text-base ">Gender</Text>
                <Text className="text-[#e6e6e6] opacity-40 text-base ">
                  {person?.gender == 1 ? "Female" : "Male"}
                </Text>
              </View>
              <View className="flex-col items-center border-r-2 px-2 border-white">
                <Text className="text-white text-base ">Birthday</Text>
                <Text className="text-[#e6e6e6] opacity-40 text-sm ">
                  {person?.birthday}
                </Text>
              </View>
              <View className="flex-col items-center border-r-2 px-2 border-white">
                <Text className="text-white text-base ">Known for</Text>
                <Text className="text-[#e6e6e6] opacity-40 text-sm ">
                  {" "}
                  {person?.known_for_department}
                </Text>
              </View>
              <View className="flex-col items-center  px-2 ">
                <Text className="text-white text-base ">Popularity</Text>
                <Text className="text-[#e6e6e6] opacity-40 text-base ">
                  {" "}
                  {person?.popularity?.toFixed(2)} %{" "}
                </Text>
              </View>
            </View>
            <View className="m-5 ">
              <Text className="text-white text-2xl font-normal ">
                Biography
              </Text>
              <Text className="text-[#e6e6e6] opacity-40  text-base font-normal mt-2 ">
                {person?.biography || "N/A"}
              </Text>
            </View>

            {personMovies.length > 0 ? (
              <MovieList
                title="Movies"
                data={personMovies}
                showSeeAllBtn={false}
              />
            ) : (
              <Loading w={100} h={100} s={50} t={5} />
            )}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default PersonScreen;
