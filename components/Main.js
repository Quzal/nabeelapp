import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import Login from "./Registration/Login";
import Signup from "./Registration/Signup";
import { Dimensions, Button, TouchableOpacity } from "react-native";

export default function Main({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.Btns}
          onPress={() => navigation.navigate("Login")}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            marginTop: 10,
            marginBottom: 10,
            textAlign: "center",
          }}
        >
          OR
        </Text>

        <TouchableOpacity
          style={styles.Btns}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Sign up
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.Btns}
          title="Post-Hire Checklist"
          onPress={() => navigation.navigate("StepOne")}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Post-Hire Checklist
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 100,
    padding: 20,
    justifyContent: "center",
  },
  Btns: {
    backgroundColor: "#04609F",
    borderRadius: 5,
    height: 50,
    justifyContent: "center",
  },
});
