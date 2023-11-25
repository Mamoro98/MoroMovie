import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "../theme";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
const Header = () => {
  const nav = useNavigation();
  return (
    <View className="flex-row w-full justify-between px-4 mt-10 items-center">
      <TouchableOpacity>
        <Bars3CenterLeftIcon size={30} strokeWidth={2} color={"white"} />
      </TouchableOpacity>
      <Text className=" text-3xl font-bold" style={styles.text}>
        M<Text className="text-white">ovies</Text>
      </Text>
      <TouchableOpacity onPress={() => nav.navigate("Search")}>
        <MagnifyingGlassIcon size={30} strokeWidth={2} color={"white"} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
