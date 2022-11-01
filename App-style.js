import React from 'react'
import{
Text,
View,
Button,
StyleSheet
} from 'react-native'

const App = ()=>{
return(
    <View>
        <Text style={[style.color,style.font]}>Red Dead</Text>
    </View>
);
}


const style=StyleSheet.create({
    color:{
    color:'red',
    backgroundColor:'black'
    },
    font:{
    fontWeight:'bold',
    fontSize:20
    }
}
)

export default App;
