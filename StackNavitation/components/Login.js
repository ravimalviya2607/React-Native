import { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
export const Login = (props) => {

  const [name, setName] = useState("");
  const age = 23;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>Login Screen</Text>
      <TextInput
        style={{ fontSize: 20, borderColor: '#000', borderWidth: 2 }}
        onChangeText={(text) => setName(text)} placeholder='Enter name' />
      <Button title='Go to Home Page' onPress={() => props.navigation.navigate("Home", { name, age })} />
    </View>
  );
};