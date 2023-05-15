import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import globalStyles from "../styles/global";

export default function ReviewDetails({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text>{navigation.getParam("title")}</Text>
      <Text>{navigation.getParam("rating")}</Text>
      <Text>{navigation.getParam("body")}</Text>
    </View>
  );
}
