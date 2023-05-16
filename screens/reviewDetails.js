import React from "react";
import { View, Text, Image, StyleSheet, Touchable } from "react-native";
import globalStyles from "../styles/global";
import { images } from "../styles/global";
import Card from "../components/card";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

export default function ReviewDetails({ navigation, route }) {
  const { title, body, rating } = route.params;
  const handlePress = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={globalStyles.container}>
      <View
        style={{
          flex: 1,
        }}
      >
        <Card>
          <Text>{title}</Text>
          <Text>{body}</Text>
          <View style={styles.rating}>
            <Image source={images.ratings[rating]}></Image>
          </View>
        </Card>
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={handlePress}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
