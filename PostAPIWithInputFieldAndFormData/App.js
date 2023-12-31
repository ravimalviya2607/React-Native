

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');

  const[nameError,setNameError]=useState(false);
  const[ageError,setAgeError]=useState(false);
  const[emailError,setEmailError]=useState(false);

  const saveData = async () => {

   setNameError(!name)
   setAgeError(!age)
   setEmailError(!email)

    if(!name ||!age ||!email){
      return false
    }

    console.warn("next");

    const url = "http://10.0.2.2:3000/users"
    let result = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name, email, age})
    });
    result=await result.json();
    if(result){
      console.warn("Data Added")
    }

  }
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Post API With Input Field Data</Text>

      <TextInput style={styles.input} value={name} onChangeText={(text) => setName(text)} placeholder='Enter Name' />

      {
        nameError ? <Text style={styles.errorText} >Please Enter Valid Name</Text>:null
      }

      <TextInput style={styles.input} value={age} onChangeText={(text) => setAge(text)} placeholder='Enter Age' />

      
      {
        ageError ? <Text style={styles.errorText} >Please Enter Valid Age</Text>:null
      }

      <TextInput style={styles.input} value={email} onChangeText={(text) => setEmail(text)} placeholder='Enter Email' />

      {
        emailError ? <Text style={styles.errorText} >Please Enter Valid Email</Text>:null
      }

      <Button title='Save Data' onPress={saveData} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "skyblue",
    borderWidth: 1,
    fontSize: 20,
    marginBottom:5,
    marginTop:5,
    padding:5
  },
  errorText:{
    color:'red',

  }
})
export default App;
