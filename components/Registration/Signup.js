import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { withTheme } from "react-native-elements";
import { Button } from "react-native-paper";

function Signup({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 20, color: "gray", marginBottom: 20 }}>
          Sign up now
        </Text>
        <TextInput
          style={styles.inputText}
          placeholder="Full Name"
          // onChangeText={(text) => this.setState({ email: text })}
          // value={this.state.email}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          keyboardType="email-address"
          //   onChangeText={(text) => this.setState({ email: text })}
          //   value={this.state.email}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Phone Number"
          //   onChangeText={(text) => this.setState({ email: text })}
          //   value={this.state.email}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Address"
          //   onChangeText={(text) => this.setState({ email: text })}
          //   value={this.state.email}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Service type"
          //   onChangeText={(text) => this.setState({ email: text })}
          //   value={this.state.email}
        />
        <TextInput
          style={styles.inputTextPass}
          secureTextEntry={true}
          placeholder="Chose Password"
          // keyboardType="password"
          // onChangeText={(text) => this.setState({ password: text })}
          // value={this.state.password}
        />
        {/* <Button style={styles.signinBtn}>Sign up</Button> */}

        <TouchableOpacity
          style={styles.Btns}
          // onPress={() => navigation.navigate("Signup")}
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
      </View>
    </View>
  );
}
export default Signup;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  inputText: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1.5,

    marginBottom: 10,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 5,
  },
  inputTextPass: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1.5,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 5,
  },
  signinBtn: {
    color: "white",
    backgroundColor: "#04609F",
    borderRadius: 5,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  Btns: {
    width: 200,
    backgroundColor: "#04609F",
    borderRadius: 5,
    height: 50,
    marginTop: 30,
    justifyContent: "center",
  },
});
