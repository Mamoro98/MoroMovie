import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";
import { theme } from "../theme";
const Loading = () => {
  let { width, height } = Dimensions.get("window");

  return (
    <View
      className="flex-row justify-center items-center"
      style={{
        width: width,
        height: height,
      }}
    >
      <Progress.CircleSnail
        thickness={12}
        size={160}
        color={theme.background}
      />
    </View>
  );
};

export default Loading;
