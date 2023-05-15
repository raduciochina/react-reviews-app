import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "../screens/about";
import CustomHeader from "../components/customHeader";

const AboutStack = createNativeStackNavigator();

function AboutStackScreen() {
  return (
    <AboutStack.Navigator
      screenOptions={{
        header: () => <CustomHeader />,
      }}
    >
      <AboutStack.Screen name="About" component={About} />
    </AboutStack.Navigator>
  );
}

export default AboutStackScreen;
