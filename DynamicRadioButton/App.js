
import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {

    const skills = [
        {
            id: 1,
            name: "Java"
        },
        {
            id: 2,
            name: "C++"
        },
        {
            id: 3,
            name: "Python"
        },
        {
            id: 4,
            name: "Node"
        },
        ,
        {
            id: 5,
            name: "SQL"
        },

    ]

    const [SelectedRadio, setSelectedRadio] = useState(1)
    return (
        <View style={styles.main}>
            {
                skills.map((item,index) => <TouchableOpacity 
                key={index}
                onPress={() => setSelectedRadio(item.id)}>
                    <View style={styles.radioWrapper}>
                        <View style={styles.radio}>
                            {
                                SelectedRadio == item.id ? <View style={styles.radioBg}></View> : null
                            }
                        </View>
                        <Text style={styles.radioText}>{item.name}</Text>
                    </View>
                </TouchableOpacity>)
            }
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
        
    },
    radioText: {
        fontSize: 20,
        color: 'skyblue'
    },
    radio: {
        height: 40,
        width: 40,
        borderColor: 'skyblue',
        borderWidth: 2,
        borderRadius: 20,
        margin: 10
    },
    radioWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    radioBg: {
        backgroundColor: 'skyblue',
        height: 28,
        width: 28,
        borderRadius: 20,
        margin: 4
    }
})

export default App;
