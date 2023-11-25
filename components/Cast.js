import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Cast = ({ cast }) => {
  let personname = "Andrew Tate";
  const nav = useNavigation();
  return (
    <View className="flex-col ml-5 ">
      <Text className="text-[#e6e6e6] opacity-40 text-base mt-4 font-medium ">
        Top Cast
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 15 }}
      >
        {cast &&
          cast.map((person, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => nav.navigate("Person", person)}
              >
                <View key={index} className="mx-2 mt-4">
                  <Image
                    source={require("../assets/images/castImage1.png")}
                    className="w-16 h-16  rounded-full "
                  />
                  <Text className="text-[#e6e6e6] opacity-40 text-sm mt-4 font-medium  ">
                    {personname}
                  </Text>
                  <Text className="text-[#e6e6e6] opacity-40 text-sm mt-2 font-medium  ">
                    {personname}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default Cast;

const styles = StyleSheet.create({});
