import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ReviewDetails from "../screens/reviewDetails";
import Home from "../screens/home";
import CustomHeader from "../components/customHeader";
import { Button } from "react-native";

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        header: () => <CustomHeader />,
      }}
    >
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="ReviewDetails" component={ReviewDetails} />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;
