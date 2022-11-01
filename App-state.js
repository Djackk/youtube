import React, {Component, useState} from 'react'
import{
    Text,
    View,Button
}from 'react-native'

function App(){
    const [count,setCount]=useState(0)
    return (
        <View>
            <Button onPress={()=>setCount(count-1)} title={"Dec"}></Button>
            <Text style={{fontSize:200}}>{count}</Text>
            <Button onPress={()=>setCount(count+1)} title={"Inc"}></Button>
        </View>
    );
}

export default App;
