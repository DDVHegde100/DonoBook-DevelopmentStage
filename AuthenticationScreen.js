import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, StyleSheet, Alert, Image} from 'react-native'
import firebase from 'firebase';
import db from '../config';

export default class AuthenticationScreen extends Component{
    constructor(){
        super()
        this.state={
            emailId:'',
            password:''
        }
    }
    SignUp=(emailId, password)=>{
        firebase.auth().createUserWithEmailIdAndPassword(emailId, password)
        .then((response)=>{
            return Alert.alert("You have successfully Signed Up!")
        })
        .catch(function(error){
            var errorCode=error.code
            var errorMessage=error.message;
            return Alert.alert(errorMessage)
        })
    }
    Login=(emailId, password)=>{
        firebase.auth().signInWithEmailIdAndPassword(emailId, password)
        .then((response)=>{
            return Alert.alert("You have successfully Logged In!")
        })
        .catch(function(error){
            var errorCode=error.code
            var errorMessage=error.message;
            return Alert.alert(errorMessage)
        })
    }
    render(){
        return(
            <View style={styles.container}>
            <View>
                <TextInput style={styles.loginBox} placeholder="BookSanta@book.com" 
                 keyboardType='Email Address' 
                 onChangeText={(text)=>{
                     this.setState({
                         emailId:text
                     })
                 }}>

                </TextInput>

                <View>
                <TextInput style={styles.loginBox} placeholder="Password"
                 secureTextEntry={true} 
                 keyboardType='password' 
                 onChangeText={(text)=>{
                     this.setState({
                         password:text
                     })
                 }}>

                </TextInput>
                <TouchableOpacity style={styles.button} 
                onPress={()=>{this.SignUp(this.state.emailId, this.state.password)}}>
                <Text>
                    SignUp
                </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} 
                onPress={()=>{this.Login(this.state.emailId, this.state.password)}}>
                <Text>
                    Login
                </Text>
                </TouchableOpacity>
            
            <View>
                <Text style={styles.Title}>
                    Welcome to the DonoBook!
                </Text>
            </View>
            </View>
            </View>
            </View>
        )
    }
}
 const styles= StyleSheet.create({
     loginBox:{
         width: 250,
         height: 50,
         paddingLeft: 40,
         borderWidth: 2,
         borderColor: '#b0b0b0',
         margin: 5
     },
     container:{
         flex:1,
         backgroundColor: '#52c8ff',
     },
     Title:{
         fontSize: 50,
         fontWeight: 10,
         fontFamily: "Times New Roman",
         fontColor: '#ffffff'
     },
     button:{
         width: 150,
         height: 50,
         borderRadius: 20,
         backgroundColor: '#44c95b',
         fontColor: 'white',
         justifyContent: 'center',
         alignItems: 'center'
     }

 })