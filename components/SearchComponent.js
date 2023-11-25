import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { XMarkIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";

const SearchComponent = () => {
  let { width, height } = Dimensions.get("window");
  const nav = useNavigation();
  const [result, setresult] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  return (
    <View>
      <View className="w-[90%] items-center justify-between flex-row self-center h-14 border-[#444343] border-2  rounded-full">
        <TextInput
          className="pl-6 text-white text-base"
          placeholder="Search here.."
          placeholderTextColor={"white"}
        />
        <TouchableOpacity
          onPress={() => nav.navigate("Home")}
          className="mr-1 bg-neutral-500 p-3 rounded-full"
        >
          <XMarkIcon size={20} color={"white"} strokeWidth={2} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchComponent;

const styles = StyleSheet.create({});
