import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import Home from "./screens/home";
import AppLoading from "expo-app-loading";
import Navigator from "./routes/homeStack";

const getFonts = () => {
  return Font.loadAsync({
    // "open-sans-variable-font": require("./assets/fonts/OpenSans-VariableFont_wdth,wght.ttf"),
    "open-sans-regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "open-sans-italic": require("./assets/fonts/OpenSans-Italic.ttf"),
    "open-sans-medium": require("./assets/fonts/OpenSans-Medium.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return <Navigator />;
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={() => console.warn}
      />
    );
  }
}
