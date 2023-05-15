import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import globalStyles from "../styles/global";

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("ReviewDetails");
  };
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Button title="Go to review details" onPress={pressHandler} />
    </View>
  );
}
