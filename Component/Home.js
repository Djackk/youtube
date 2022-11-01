import React from "react"
import {
Text,
View,
Button
} from "react-native"

const Home = (props)=>{
console.log(props)
return(
    <View>
        <Text style={{fontSize:60}}>Home</Text>
        <Text style={{fontSize:40}}>{props.data}</Text>
    </View>
)
}

export default Home;