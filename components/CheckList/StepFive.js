// import React, { useState } from "react";
// import { View, Button, Platform, TouchableOpacity } from "react-native";
// import DateTimePicker from "@react-native-community/datetimepicker";

// export default function StepFive({ navigation }) {
//   const [date, setDate] = useState(new Date(1598051730000));
//   const [mode, setMode] = useState("date");
//   const [show, setShow] = useState(false);

//   const onChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShow(Platform.OS === "ios");
//     setDate(currentDate);
//   };
//   const showMode = (currentMode) => {
//     setShow(true);
//     setMode(currentMode);
//   };

//   const showDatepicker = () => {
//     debugger;
//     showMode("date");
//   };

//   const showTimepicker = () => {
//     showMode("time");
//   };

//   return (
//     <View>
//       <View>
//         <Button onPress={showDatepicker} title="Show date picker!" />
//       </View>
//       <View>
//         <Button onPress={showTimepicker} title="Show time picker!" />
//       </View>
//       {show && (
//         <DateTimePicker
//           testID="dateTimePicker"
//           value={date}
//           mode={mode}
//           is24Hour={true}
//           display="default"
//           onChange={onChange}
//         />
//       )}
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
//             onPress={() => navigation.navigate("StepFour")}
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
//             onPress={() => navigation.navigate("StepSix")}
//           />
//         </TouchableOpacity>
//       </View>
//     </View>

//     // <View>
//     //   <View
//     //     style={{
//     //       flex: 9,
//     //       backgroundColor: "white",
//     //       alignItems: "center",
//     //       justifyContent: "center",
//     //     }}
//     //   >
//     //     <Text style={{ color: "#04609F", fontWeight: "bold", fontSize: 30 }}>
//     //       5. What date(s) did the demage occur?
//     //     </Text>
//     //   </View>
//     // </View>
//   );
// }
