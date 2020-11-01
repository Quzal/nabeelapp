import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-elements";
export default function StepTwo({ navigation }) {
  return (
    <View style={styles.MainContainer}>
      <View style={{ padding: 20 }}>
        <Text style={{ color: "#04609F", fontWeight: "bold", fontSize: 30 }}>
          2. Did any damage occur?
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 20,
          }}
        >
          <View style={{ flex: 1 }}>
            <Button title="Yes" type="outline" />
          </View>
          <View style={{ flex: 1 }}>
            <Button title="No" type="outline" />
          </View>
        </View>
      </View>

      <View style={styles.bottomView}>
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#04609F",
          }}
          onPress={() => navigation.navigate("StepOne")}
        >
          <View>
            <Text style={{ marginRight: 15, fontSize: 20, color: "white" }}>
              <Icon name="chevron-left" size={15} color="white" /> Prev
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#04609F",
          }}
          onPress={() => navigation.navigate("StepThree")}
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
    flexDirection: "row",
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
