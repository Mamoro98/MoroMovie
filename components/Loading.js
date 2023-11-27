import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";
import { theme } from "../theme";
const Loading = ({ w, h, t, s }) => {
  let { width, height } = Dimensions.get("window");

  return (
    <View
      className="flex-row justify-center items-center"
      style={{
        width: w ? w : width,
        height: h ? h : height,
      }}
    >
      <Progress.CircleSnail
        thickness={t ? t : 12}
        size={s ? s : 160}
        color={theme.background}
      />
    </View>
  );
};

export default Loading;
