

import React from 'react';
import {View, Text, SectionList} from 'react-native';

const App=()=> {

  const users=[
    {
      id: 1,
      name: "Ravi",
      data:["PHP","React js", "Angular" ]
    },
    {
      id: 2,
      name: "Hitesh",
      data:["Java","Js","HTML"]
    },
    {
      id: 3,
      name: "Sonu",
      data:["C++","C","Python"]
    },
    {
      id: 4,
      name: "Sinu",
      data:["CSS","RPGLE","JavaScript"]
    }
  ]
  return (
    <View>
      <Text style={{ fontSize: 31}}>Section List in React Native</Text>
      <SectionList
      sections={users}
      renderItem={({item})=><Text style={{fontSize: 20, marginLeft:20}}>{item}</Text>}
      renderSectionHeader={({section:{name}})=>(<Text style={{fontSize:25, color:"red"}}>{name}</Text>)}
      />
    </View>
  );
};

export default App;
