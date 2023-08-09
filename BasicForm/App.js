
// Basic Form

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const togglePassWordVisibility =()=> {
    setShowPassword((prevShowPassword)=>!prevShowPassword)
  }

  const resetFormData =()=> {
    setDisplay(false)
    setEmail("");
    setName("");
    setPassword("");
  }


  return (
    <View>
      <Text style={{ fontSize: 30, margin: 15 }}>Simple Form In React Native</Text>
      <TextInput
        style={styles.textInput}
        placeholder='Enter User Name'
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.textInput}
        placeholder='Enter User Password'
        secureTextEntry={!showPassword}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TouchableOpacity onPress={togglePassWordVisibility}>
        <Text>{showPassword ? 'Hide Password' : 'ShowPassword'}</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.textInput}
        placeholder='Enter User Email'
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <View style={{ marginBottom: 10 }}>
        <Button color={'green'} title='Print Details' onPress={() => setDisplay(true)} />
      </View>
      <Button title='Clear Details' onPress={resetFormData} />
      <View>
        {
          display ?
            <View>
              <Text style={{ fontSize: 20 }}>User Name is : {name}</Text>
              <Text style={{ fontSize: 20 }}>User Password is : {password}</Text>
              <Text style={{ fontSize: 20 }}>User Email is : {email}</Text>
            </View>
            : null

        }
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    color: 'blue',
    borderWidth: 2,
    borderColor: 'blue',
    margin: 10
  }
})

export default App;