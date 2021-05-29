import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Routes } from "./src/Routes";
import Examples from "./src/Examples";

import { LoadAssets } from "./src/components";

import Darkroom from "./src/Darkroom";

const Stack = createStackNavigator<Routes>();
const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Examples"
      component={Examples}
      options={{
        title: "React Native",
      }}
    />
    <Stack.Screen
      name="Darkroom"
      component={Darkroom}
      options={{
        title: "🏞 Darkroom",
        header: () => null,
      }}
    />
  </Stack.Navigator>
);
const App = () => {
  return (
    <LoadAssets >
      <AppNavigator />
    </LoadAssets>
  );
};
export default App;