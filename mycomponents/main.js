import React from 'react';
import { Text, TextInput, View } from 'react-native';


// ---- This is just a Splash Screen ,Currently not Attached to App/Main thread 
class Main extends React.Component{


  render(){
      return(
<View style={{flex:1,width:'100%',alignSelf:'center'}}>
    <View style={{flexDirection:'row',alignContent:'center',backgroundColor:'#31a4eb',flex:1,alignItems:'center',width:'100%'
,justifyContent:'center'
}}>
    <Text style={{color:'white',fontSize:40,fontWeight:'bold'}}>camplify</Text>
    </View>

</View>
      )
  }  
}

export default Main;