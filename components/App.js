import React from "react";
import Main from "./Main";
import Login from "./Registration/Login";
import Signup from "./Registration/Signup";
import StepOne from "./CheckList/StepOne";
import StepTwo from "./CheckList/StepTwo";
import StepThree from "./CheckList/StepThree";
import StepFour from "./CheckList/StepFour";
import StepFive from "./CheckList/StepFive";
import StepSix from "./CheckList/StepSix";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{ headerTitleAlign: "center" }}
      >
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: "Mechanic" }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen
          name="StepOne"
          component={StepOne}
          options={{ title: "Post-Hire Checklist" }}
        />
        <Stack.Screen
          name="StepTwo"
          component={StepTwo}
          options={{ title: "Post-Hire Checklist" }}
        />
        {/* <Stack.Screen
          name="StepThree"
          component={StepThree}
          options={{ title: "Post-Hire Checklist" }}
        /> */}
        {/* <Stack.Screen
          name="StepFour"
          component={StepFour}
          options={{ title: "Post-Hire Checklist" }}
        /> */}
        {/* <Stack.Screen
          name="StepFive"
          component={StepFive}
          options={{ title: "Post-Hire Checklist" }}
        /> */}
        {/* <Stack.Screen
          name="StepSix"
          component={StepSix}
          options={{ title: "Post-Hire Checklist" }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
