
// Importance of JSX
// JSX use in This Code
// Without JSX we cann't write HTML code in javaScript

import React from 'react';
import {Text, View, Button} from 'react-native'

const name = "ravi";
let age = 3;
var email= "abc@gamil.com";

function fruit(){
  return "Apple";
}

const App = () => {
  return (
<View>
<Text style={{ fontSize:30}}>{name}</Text>
<Text style={{ fontSize:30}}>{age}</Text>
<Text style={{ fontSize:30}}>{email}</Text>
<Text style={{ fontSize:30}}>{fruit()}</Text>
<Text style={{ fontSize:30}}>{500*20}</Text>
<Text style={{ fontSize:30}}>{age===30 ? "Equal 30" : "Unkonwn age"}</Text>
</View>
  );
}
 
export default App;
