import React from 'react'
import{
View,
Text, Button
} from "react-native"
const Login =()=>{
function login(){
alert("Login Success")
}
return(
<View>
<Text>
Login is here
</Text>
<Button title ="Login" onPress={login}/>
</View>
)
}

export default Login;