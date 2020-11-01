import React, { Component, useState } from "react";
import { Header } from "react-native-elements";

import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  login = (email, pass) => {
    // alert("email: " + email + " password: " + pass);
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            height: "100%",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 20, color: "gray" }}>
            Log in to your account
          </Text>
          <TextInput
            style={styles.inputText}
            placeholder="JohanDoe@mechanic.com"
            keyboardType="email-address"
            onChangeText={(text) => this.setState({ email: text })}
            value={this.state.email}
          />
          <TextInput
            style={styles.inputTextPass}
            secureTextEntry={true}
            onChangeText={(text) => this.setState({ password: text })}
            value={this.state.password}
          />
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => this.login(this.state.email, this.state.password)}
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Login;
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
    marginTop: 20,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 5,
  },
  inputTextPass: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1.5,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 5,
  },
  forgot: {
    marginTop: 10,
    textDecorationLine: "underline",
    color: "gray",
    fontSize: 14,
  },
  loginBtn: {
    backgroundColor: "#04609F",
    borderRadius: 5,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  loginText: {
    color: "white",
    fontWeight: "bold",
  },
});
