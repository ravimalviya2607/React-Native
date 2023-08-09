
import React,{Component} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

class App extends Component {
  fruit =()=>{
    console.warn("Apple");
  }
  render() {
    return(
      <View>
        <Text style={{fontSize:30,color:"red"}}>Class Component</Text>
        <TextInput placeholder='Enter Your name'/>
        <Button title='Press Me' onPress={this.fruit}/>
      </View>
    )
  }
}


export default App;
