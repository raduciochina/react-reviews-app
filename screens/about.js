import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import globalStyles from "../styles/global";

export default function About({ navigation }) {
  const handlePress = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={globalStyles.container}>
      <Button title="press" onPress={handlePress} />
    </View>
  );
}
