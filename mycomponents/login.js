import React from 'react'
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    TouchableOpacity,
    Button,
  } from "react-native";


export default class Login extends React.Component{

constructor(){
    super();

    this.handleBackButton=this.handleBackButton.bind(this);
    this.handleLoginButton=this.handleLoginButton.bind(this);
}

handleBackButton(){
    // calling parent function to change screen to registration
this.props.screenChanger("reg");
}


handleLoginButton(){

    // Calling parent function to change screen to dashboard
this.props.screenChanger("dashboard")
}
    render(){
        return(
            <View style={{flex:1,width:'100%',alignSelf:'center'}}>
                
            <View style={{backgroundColor:'#0f629d',flex:0.1,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
              
              
                <View style={{flex:0.1}}>
                <TouchableOpacity 
                onPress={this.handleBackButton} 
                >
                <Text style={{color:"white",fontWeight:'bold' ,fontSize:25}} >{'<'}</Text>
                </TouchableOpacity>
                </View>
                <View style={{flex:0.8,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:"white",fontWeight:'bold',fontSize:22}}>Login</Text>

                </View>
              
              
            </View>  
            <View style={{backgroundColor:'white',flex:0.7,alignSelf:'flex-start',marginHorizontal:'5%'}}>

                <View style={{marginTop:'10%'}}>
                    <Text style={{color:'grey'}}>Login into your account</Text>
                </View>
                {/* ------------------ change width to dynamic here */}
                <View style={{marginTop:'10%',width:300}}>
                    <TextInput  style={{ height: 50, borderColor: '#0f629d', borderWidth: 0.6 ,borderRadius:10}} 
                    placeholder="email"
                    ></TextInput>
                </View>
                {/* ------------------------- change width to dynamic here */}
                <View style={{marginTop:'5%',width:300}}>
                    <TextInput  style={{ height: 50, borderColor: '#0f629d', borderWidth: 0.6 ,borderRadius:10}}
                    placeholder="password"
                    ></TextInput>
                </View>
                {/* ------------------ change width to dynamic here */}
                <View style={{marginTop:"10%",width:200}}>
                <TouchableOpacity style={{borderRadius: 50,height:80}}>
                <Button color="#0f629d" title="Login" onPress={this.handleLoginButton}></Button>
              </TouchableOpacity>
                </View>
                <View >
                <Text style={{color:'grey',textDecorationLine:'underline'}} > Forget password?</Text>
                </View>
            </View>     
          </View>
        )
    }
};
