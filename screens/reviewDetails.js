import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import globalStyles from "../styles/global";

export default function ReviewDetails({ navigation, route }) {
  const { title, body, rating } = route.params;
  const handlePress = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={globalStyles.container}>
      <Text>{title}</Text>
      <Text>{body}</Text>
      <Text>{rating}</Text>
      <Button title="Go Back" onPress={handlePress} />
    </View>
  );
}
