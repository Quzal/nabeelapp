import React from 'react'
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    TouchableOpacity,
    Button,
    ScrollView ,
    FlatList
  } from "react-native";
export default class Signup extends React.Component{
    constructor(){
        super();
    
        this.handleBackButton=this.handleBackButton.bind(this);
        this.handleSignupButton=this.handleSignupButton.bind(this);
    }
    
    handleBackButton(){
       // -------- invoking parent method to change screen to registration   
    this.props.screenChanger("reg");
    }
    
    handleSignupButton(){
    // -------- invoking parent method to change screen to login
    this.props.screenChanger("login")
    }
    render(){
        return(
            <ScrollView >
            <View style={{flex:1,width:'100%',alignSelf:'center'}}>
                
            <View style={{backgroundColor:'#0f629d',flex:0.2,justifyContent:'center',alignItems:'center',flexDirection:'row',
        height:60
        }}>
              
              
                <View style={{flex:0.1}}>
                <TouchableOpacity 
                onPress={this.handleBackButton} 
                >
                <Text style={{color:"white",fontWeight:'bold' ,fontSize:25}} >{'<'}</Text>
                </TouchableOpacity>
                </View>
                <View style={{flex:0.8,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:"white",fontWeight:'bold',fontSize:25}}>Sign up</Text>

                </View>
              
              
            </View>  
           
            <View style={{backgroundColor:'white',flex:0.65,alignSelf:'flex-start',marginHorizontal:'5%'}}>

                <View style={{marginTop:'10%'}}>
                    <Text style={{color:'grey'}}>Sign up now</Text>
                </View>
                {/* change width to dynamic here */}
                <View style={{marginTop:'10%',width:300}}>
                    <TextInput  style={{ height: 50, borderColor: '#0f629d', borderWidth: 0.6 ,borderRadius:10}} 
                    placeholder="Full Name"
                    ></TextInput>
                </View>
                {/* change width to dynamic here */}
                <View style={{marginTop:'5%',width:300}}>
                    <TextInput  style={{ height: 50, borderColor: '#0f629d', borderWidth: 0.6 ,borderRadius:10}}
                    placeholder="Email"
                    ></TextInput>
                </View>
                <View style={{marginTop:'5%',width:300}}>
                    <TextInput  style={{ height: 50, borderColor: '#0f629d', borderWidth: 0.6 ,borderRadius:10}}
                    placeholder="Phone Number"
                    ></TextInput>
                </View>
                <View style={{marginTop:'5%',width:300}}>
                    <TextInput  style={{ height: 50, borderColor: '#0f629d', borderWidth: 0.6 ,borderRadius:10}}
                    placeholder="Address"
                    ></TextInput>
                </View>
                <View style={{marginTop:'5%',width:300}}>
                    <TextInput  style={{ height: 50, borderColor: '#0f629d', borderWidth: 0.6 ,borderRadius:10}}
                    placeholder="Service Type"
                    ></TextInput>
                </View>
                <View style={{marginTop:'5%',width:300}}>
                    <TextInput  style={{ height: 50, borderColor: '#0f629d', borderWidth: 0.6 ,borderRadius:10}}
                    placeholder="Password"
                    ></TextInput>
                </View>
                {/* change width to dynamic here */}
                <View style={{marginTop:"10%",width:200}}>
                <TouchableOpacity style={{borderRadius: 50,height:80}}>
                <Button color="#0f629d" title="Signup" onPress={this.handleSignupButton}></Button>
              </TouchableOpacity>
                </View>
            </View>   
           
            {/* <View style={{backgroundColor:'white',flex:0.2}}>
                </View>      */}
          </View>
          </ScrollView>  
        )
    }
}