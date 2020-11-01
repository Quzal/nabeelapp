// import React, { useState, useEffect } from "react";
// import {
//   Button,
//   Image,
//   View,
//   Platform,
//   StyleSheet,
//   TouchableOpacity,
//   Text,
// } from "react-native";
// import * as ImagePicker from "expo-image-picker";
// import Constants from "expo-constants";

// export default function StepSix({ navigation }) {
//   const [image, setImage] = useState(null);

//   useEffect(() => {
//     (async () => {
//       if (Platform.OS !== "web") {
//         const {
//           status,
//         } = await ImagePicker.requestCameraRollPermissionsAsync();
//         if (status !== "granted") {
//           alert("Sorry, we need camera roll permissions to make this work!");
//         }
//       }
//     })();
//   }, []);

//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     console.log(result);

//     if (!result.cancelled) {
//       setImage(result.uri);
//     }
//   };

//   //   renderFileData() {
//   //     if (this.state.fileData) {
//   //       return <Image source={{ uri: 'data:image/jpeg;base64,' + this.state.fileData }}
//   //         style={styles.images}
//   //       />
//   //     }
//   //     else {
//   //       return <Image source={require('./assets/dummy.png')}
//   //         style={styles.images}
//   //       />
//   //     }
//   //   }

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
//           6. Damage photos
//         </Text>

//         <Image
//           source={{ uri: "https://i.imgur.com/TkIrScD.png" }}
//           // style={styles.logo}
//         />

//         <Button title="Pick an image from camera roll" onPress={pickImage} />
//         {image && (
//           <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
//         )}
//       </View>

//       <View style={{ flex: 1, flexDirection: "row", height: 50 }}>
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
