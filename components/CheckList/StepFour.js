// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   TouchableOpacity,
//   TextInput,
// } from "react-native";

// export default function StepFour({ navigation }) {
//   return (
//     <View>
//       <View
//         style={{
//           flex: 9,
//           backgroundColor: "white",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <Text style={{ color: "#04609F", fontWeight: "bold", fontSize: 30 }}>
//           4. Describe the demage
//         </Text>
//         <TextInput
//           style={styles.inputText}
//           multiline={true}
//           placeholder="For example there is a tear on the drivers side seat near head rest. "
//         />
//       </View>

//       <View
//         style={{
//           flex: 1,
//           flexDirection: "row",
//           width: "100%",
//           height: 50,
//           backgroundColor: "#04609F",
//           justifyContent: "center",
//           alignItems: "center",
//           position: "absolute",
//           bottom: 0,
//         }}
//       >
//         <TouchableOpacity
//           style={{
//             flex: 1,
//             alignItems: "center",
//             justifyContent: "center",
//             backgroundColor: "#04609F",
//           }}
//         >
//           <Button
//             title="Prev"
//             backgroundColor="#04609F"
//             onPress={() => navigation.navigate("StepThree")}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={{
//             flex: 1,
//             alignItems: "center",
//             justifyContent: "center",
//             backgroundColor: "#04609F",
//           }}
//         >
//           <Button
//             title="Next"
//             backgroundColor="#04609F"
//             onPress={() => navigation.navigate("StepFive")}
//           />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   inputText: {
//     width: 300,
//     height: 40,
//     borderColor: "gray",
//     borderWidth: 1.5,
//     marginTop: 20,
//     marginBottom: 10,
//     paddingTop: 8,
//     paddingLeft: 8,
//     paddingRight: 8,
//     borderRadius: 15,
//     minHeight: 150,
//     height: "auto",
//   },
// });
