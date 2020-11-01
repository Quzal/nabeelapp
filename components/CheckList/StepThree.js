// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   TouchableOpacity,
//   TextInput,
// } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome";
// // import { ListItem, CheckBox, Body } from "native-base";

// export default function StepThree({ navigation }) {
//   const [checked, setChecked] = React.useState("first");
//   const userList = {
//     1: "External Fixture",
//     2: "Cleaning",
//     3: "Refuelling",
//     4: "Tolls",
//     5: "Awning",
//   };
//   return (
//     <View style={styles.MainContainer}>
//       {/* <Container>
//         <Header />
//         <Content>
//           <ListItem>
//             <CheckBox checked={true} />
//             <Body>
//               <Text>Daily Stand Up</Text>
//             </Body>
//           </ListItem>
//           <ListItem>
//             <CheckBox checked={false} />
//             <Body>
//               <Text>Discussion with Client</Text>
//             </Body>
//           </ListItem>
//           <ListItem>
//             <CheckBox checked={false} color="green" />
//             <Body>
//               <Text>Finish list Screen</Text>
//             </Body>
//           </ListItem>
//         </Content>
//       </Container> */}

//       <View style={{ padding: 20 }}>
//         <Text style={{ color: "#04609F", fontWeight: "bold", fontSize: 30 }}>
//           3. Select one or more damage categories
//         </Text>
//         <Text style={{ color: "#04609F", fontSize: 20, marginBottom: 20 }}>
//           Choose as many as you like
//         </Text>

//         <ListItem>
//           <Body>
//             <Text>Daily Stand Up</Text>
//           </Body>
//           <CheckBox checked={true} />
//         </ListItem>
//         <ListItem>
//           <Body>
//             <Text>Discussion with Client</Text>
//           </Body>
//           <CheckBox checked={false} />
//         </ListItem>
//         <ListItem>
//           <Body>
//             <Text>Finish list Screen</Text>
//           </Body>
//           <CheckBox checked={false} color="green" />
//         </ListItem>
//       </View>

//       <View style={styles.bottomView}>
//         <TouchableOpacity
//           style={{
//             flex: 1,
//             alignItems: "center",
//             justifyContent: "center",
//             backgroundColor: "#04609F",
//           }}
//           onPress={() => navigation.navigate("StepTwo")}
//         >
//           <View>
//             <Text style={{ marginRight: 15, fontSize: 20, color: "white" }}>
//               <Icon name="chevron-left" size={15} color="white" /> Prev
//             </Text>
//           </View>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={{
//             flex: 1,
//             alignItems: "center",
//             justifyContent: "center",
//             backgroundColor: "#04609F",
//           }}
//           onPress={() => navigation.navigate("StepThree")}
//         >
//           <View>
//             <Text style={{ marginRight: 15, fontSize: 20, color: "white" }}>
//               {" "}
//               Next <Icon name="chevron-right" size={15} color="white" />
//             </Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   MainContainer: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     flexDirection: "row",
//   },
//   bottomView: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#04609F",
//     justifyContent: "center",
//     alignItems: "center",
//     position: "absolute",
//     bottom: 0,
//     flexDirection: "row",
//   },
//   inputText: {
//     width: 300,
//     height: 40,
//     borderColor: "gray",
//     borderWidth: 1.5,
//     marginTop: 20,
//     marginBottom: 10,
//     paddingLeft: 8,
//     paddingRight: 8,
//     borderRadius: 5,
//   },
// });

// //   return (
// //     <View>
// //       <View
// //         style={{
// //           flex: 9,
// //           backgroundColor: "white",
// //           alignItems: "center",
// //           justifyContent: "center",
// //         }}
// //       >
// //         <Text style={{ color: "#04609F", fontWeight: "bold", fontSize: 30 }}>
// //           3. Select one or more damage categories
// //         </Text>
// //         <Text style={{ color: "#04609F", fontSize: 20 }}>
// //           Choose as many as you like
// //         </Text>
// //       </View>

// //       <CustomMultiPicker
// //         options={userList}
// //         multiple={true} //
// //         placeholderTextColor={"#757575"}
// //         returnValue={"label"}
// //         callback={(res) => {
// //           console.log(res);
// //         }}
// //         rowBackgroundColor={"white"}
// //         rowHeight={40}
// //         rowRadius={5}
// //         iconColor={"#00a2dd"}
// //         iconSize={30}
// //         selectedIconName={"ios-checkmark-circle-outline"}
// //         unselectedIconName={"ios-checkmark-circle-outline"}
// //         // scrollViewHeight={130}
// //         // selected={["Tom", "Christin"]} // list of options which are selected by default
// //       />

// //       <View style={{ flex: 1, flexDirection: "row", height: 50 }}>
// //         <TouchableOpacity
// //           style={{
// //             flex: 1,
// //             alignItems: "center",
// //             justifyContent: "center",
// //             backgroundColor: "#04609F",
// //           }}
// //         >
// //           <Button
// //             title="Prev"
// //             backgroundColor="#04609F"
// //             onPress={() => navigation.navigate("StepTwo")}
// //           />
// //         </TouchableOpacity>
// //         <TouchableOpacity
// //           style={{
// //             flex: 1,
// //             alignItems: "center",
// //             justifyContent: "center",
// //             backgroundColor: "#04609F",
// //           }}
// //         >
// //           <Button
// //             title="Next"
// //             backgroundColor="#04609F"
// //             onPress={() => navigation.navigate("StepFour")}
// //           />
// //         </TouchableOpacity>
// //       </View>
// //     </View>
// //   );
// // }
