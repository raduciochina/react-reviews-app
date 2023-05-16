import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Card(props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 }, // shadowOffset is for iOS
    shadowColor: "#333", // shadowColor is for iOS
    shadowOpacity: 0.3, // shadowOpacity is for iOS
    shadowRadius: 2, // shadowRadius is for iOS
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 20,
  },
});
