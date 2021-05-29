import * as React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import { Routes } from "../Routes";
import { StyleGuide } from "../components";

const examples = [

  {
    screen: "Darkroom",
    title: "🏞 Darkroom",
  },
] as const;

const styles = StyleSheet.create({
  container: {
    backgroundColor: StyleGuide.palette.background,
  },
  content: {
    paddingBottom: 32,
  },
  thumbnail: {
    backgroundColor: "cyan",
    alignItems:"center",
    justifyContent: "center",
    padding: StyleGuide.spacing * 3,
    borderBottomWidth: 1,
    borderTopWidth:1,

  },
  title: {
    ...StyleGuide.typography.headline,
  },
});

const Examples = () => {
  const { navigate } = useNavigation<StackNavigationProp<Routes, "Examples">>();
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={{paddingTop:250}}>
      {examples.map((thumbnail) => (
        <RectButton
          key={thumbnail.screen}
          onPress={() => navigate(thumbnail.screen)}
        >
          <View style={styles.thumbnail}>
            <Text style={styles.title}>{thumbnail.title}</Text>
          </View>
        </RectButton>
      ))}
        </View>
    </ScrollView>
  );
};
export default Examples;