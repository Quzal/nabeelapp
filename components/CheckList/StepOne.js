import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";

export default function StepOne({ navigation }) {
  return (
    <View style={styles.MainContainer}>
      <View style={{ padding: 20 }}>
        <Text style={{ color: "#04609F", fontWeight: "bold", fontSize: 30 }}>
          1. What is your email?
        </Text>
        <TextInput
          style={styles.inputText}
          placeholder="JohanDoe@mechanic.com"
          keyboardType="email-address"
        />
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#04609F",
            color: "white",
          }}
        >
          <View>
            <Text style={{ color: "#04609F" }}>Prev</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#04609F",
          }}
          onPress={() => navigation.navigate("StepTwo")}
        >
          <View>
            <Text style={{ marginRight: 15, fontSize: 20, color: "white" }}>
              {" "}
              Next <Icon name="chevron-right" size={15} color="white" />
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomView: {
    width: "100%",
    height: 50,
    backgroundColor: "#04609F",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
  },
  inputText: {
    width: 300,
    height: 40,
    borderColor: "gray",
    borderWidth: 1.5,
    marginTop: 20,
    marginBottom: 10,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 5,
  },
});
