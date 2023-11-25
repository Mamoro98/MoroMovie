import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { ChevronLeftIcon, HeartIcon } from "react-native-heroicons/solid";
import { styles } from "../theme";
import { useNavigation } from "@react-navigation/native";
import MovieList from "../components/MovieList";

const PersonScreen = () => {
  const nav = useNavigation();
  const peronname = "Andrew Tate";
  const [data, setdata] = useState([1, 2, 3]);
  return (
    <ScrollView>
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
              source={require("../assets/images/castImage1.png")}
              className="rounded-full w-[250] h-[250]"
            />
          </View>
        </View>
        <View className="justify-center items-center mt-2">
          <Text className="text-white text-3xl font-semibold ">
            {peronname}
          </Text>
          <Text className="text-[#e6e6e6] opacity-40 text-sm mt-2 font-medium  ">
            London, United Kingdom
          </Text>
        </View>
        <View className="w-[90%] justify-evenly px-4 items-center self-center mt-5 bg-neutral-700 h-20 rounded-full flex-row ">
          <View className="flex-col  border-r-2 pr-2 border-white">
            <Text className="text-white text-base ">Gender</Text>
            <Text className="text-[#e6e6e6] opacity-40 text-base "> Male</Text>
          </View>
          <View className="flex-col items-center border-r-2 px-2 border-white">
            <Text className="text-white text-base ">Birthday</Text>
            <Text className="text-[#e6e6e6] opacity-40 text-sm ">
              1998/06/14
            </Text>
          </View>
          <View className="flex-col items-center border-r-2 px-2 border-white">
            <Text className="text-white text-base ">Known for</Text>
            <Text className="text-[#e6e6e6] opacity-40 text-sm "> Acting</Text>
          </View>
          <View className="flex-col items-center  px-2 ">
            <Text className="text-white text-base ">Popularity</Text>
            <Text className="text-[#e6e6e6] opacity-40 text-base "> 64.23</Text>
          </View>
        </View>
        <View className="m-5 ">
          <Text className="text-white text-2xl font-normal ">Biography</Text>
          <Text className="text-[#e6e6e6] opacity-40  text-base font-normal mt-2 ">
            Do quis culpa deserunt proident veniam excepteur dolor dolore. Amet
            et esse reprehenderit commodo irure elit ut incididunt esse. Enim ea
            cillum velit occaecat est do aliqua irure ullamco minim cillum. Do
            quis culpa deserunt proident veniam excepteur dolor dolore. Amet et
            esse reprehenderit commodo irure elit ut incididunt esse. Enim ea
            cillum velit occaecat est do aliqua irure ullamco minim cillum.
          </Text>
        </View>
        <MovieList data={data} title={"Movies"} showSeeAllBtn={false} />
      </View>
    </ScrollView>
  );
};

export default PersonScreen;
