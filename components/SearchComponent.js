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

const SearchComponent = ({ handleSearch }) => {
  let { width, height } = Dimensions.get("window");
  const nav = useNavigation();
  return (
    <View>
      <View className="w-[90%] items-center justify-between flex-row self-center h-14 border-[#444343] border-2  rounded-full">
        <TextInput
          onChangeText={handleSearch}
          className="pl-6 text-white text-base"
          placeholder="Search here.."
          placeholderTextColor={"white"}
        />
        <TouchableOpacity
          onPress={() => nav.navigate("Home2")}
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
