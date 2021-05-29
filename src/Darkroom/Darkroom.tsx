import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDerivedValue, useSharedValue } from "react-native-reanimated";
import { curveLines } from "react-native-redash";

import Picture from "./Picture";
import Controls from "./Controls";
import Cursor from "./Cursor";
import { HEIGHT, WIDTH, PADDING } from "./Constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "space-evenly",
  },
  cursors: {
    ...StyleSheet.absoluteFillObject,
    left: PADDING / 2,
    right: PADDING / 2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export const assets = [
  require("./assets/1.jpg"),
  require("./assets/2.jpg"),
  require("./assets/3.jpg"),
  require("./assets/4.jpg"),
  require("./assets/5.jpg"),
  require("./assets/6.jpg"),
];

const Darkroom = () => {
  const v1 = useSharedValue(1);
  const v2 = useSharedValue(0.9);
  const v3 = useSharedValue(0.8);
  const v4 = useSharedValue(0.7);
  const v5 = useSharedValue(0.6);
  const v6 = useSharedValue(0.5);
  const v7 = useSharedValue(0.4);
  const v8 = useSharedValue(0.3);
  const v9 = useSharedValue(0.2);
  const v10 = useSharedValue(0.1);
  const v11 = useSharedValue(0);
  

  const STEPS = 10;
  const STEP = WIDTH / STEPS;
  const path = useDerivedValue(() =>
    curveLines(
      [v1, v2, v3, v4, v5,v6,v7,v8,v9,v10,v11].map((value, i) => ({
        x: PADDING + STEP * i,
        y: value.value * HEIGHT,
      })),
      0.1,
      "complex"
    )
  );
  return (
    <SafeAreaView style={styles.container}>
      <Picture source={assets[2]} path={path} />
      <View>
        <Controls path={path} />
        <View style={styles.cursors}>
          <Cursor value={v1} />
          <Cursor value={v2} />
          <Cursor value={v3} />
          <Cursor value={v4} />
          <Cursor value={v5} />
          <Cursor value={v6} />
          <Cursor value={v7} />
          <Cursor value={v8} />
          <Cursor value={v9} />
          <Cursor value={v10} />
          <Cursor value={v11} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Darkroom;