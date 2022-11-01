/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

class App extends Component{
render(){
return(
    <View>
    <Text>Component Test</Text>
    <Button onPress={()=>alert("Button Daba")} title ="Press"/>
    </View>

    )
}
}

export default App;
