import React, { useState } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CustomInput from './CustomInput'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

function SignUp(props) {
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const handleSubmit =async()=>{
     if(email && password ){
        try {
            await createUserWithEmailAndPassword(auth,email,password)
        } catch (error) {
            console.log(error)
        }
     }
}
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View>
          <Text style={[styles.login, styles.text]}>Sign Up</Text>
        </View>
        <View style={{marginBottom: 29,}} >
          <CustomInput placeholder="Enter your Email" onChangeText={(text)=>{setEmail(text)}}/>
        </View>
        <CustomInput placeholder="Enter your Password" onChangeText={(text)=>{setPassword(text)}}/>
      </View>
      <View style={styles.box2}>
        <View>
          <TouchableOpacity style={styles.button} onPress={()=>{ handleSubmit()}}>
            <Text style={[styles.buttonText, styles.text]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:1,flexDirection:"row"}}>
          <Text style={[styles.text, styles.acountText]}>Already have an account?
          </Text>
          <TouchableOpacity onPress={()=>{props.navigation.navigate("Login")}}>
          <Text style={[styles.text, styles.acountText]}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: 'center', // Center vertically
    alignItems: 'center',
  },
  box: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center',
  },
  box2: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center',
  },
  text: {
    color: "#FFF",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 20,
  },
  login: {
    fontSize: 20,
    marginBottom: 44
  },
  input: {
    borderWidth: 1,
    borderColor: "#FFF",
    borderRadius: 20,
    marginBottom: 29,
    width: 350,
    height: 50,
    color: "#FFFFFF"
  },
  button: {
    justifyContent: 'center', // Center vertically
    alignItems: 'center',
    width: 350,
    height: 42,
    backgroundColor: "#E33939",
    borderRadius: 20,

  },
  buttonText: {
    fontSize: 12,
  },
  acountText: {
    fontSize: 14,
    fontWeight: "700",
    marginTop: 50
  }


});

export default SignUp;
