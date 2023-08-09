
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const App = () => {
  const [name, setName] = useState("");
  return (
    <View>
      <Text style={{ fontSize: 30 }} >Handle Text Input</Text>
      <Text style={{ fontSize: 30 }} >Your Name is : {name}</Text>
      <TextInput
        style={styles.textInput}
        placeholder='Enter Your name'
        value={name}
        onChangeText={(text)=>setName(text)}
      />
      <Button title='Clear Input Value' onPress={()=>setName('')}/>
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

}
)

export default App;
