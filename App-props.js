/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Text,
  View,Button
} from 'react-native';


/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

import Login from "./Component/Login"
import Home from "./Component/Home"
const App  = () => {
const data = "From main"
function login(){
alert("Login Success")
}
  return (
  <>
  <View>
  <Button title="Hello" onPress={()=>{alert("Yoo")}}/>
  <Text>Something New</Text>
  <Home data={data}/>
  </View>
  </>
  );
};

export default App;
