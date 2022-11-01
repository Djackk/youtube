import React, {Component, useState} from 'react'
import {
    Text,
    View, Button, FlatList,TextInput
} from 'react-native'

class App extends Component{
    constructor()
    {
        super();
        this.state={
            InvalidAddr:""
        }
     }
     checkAlpha(e){
        let rjx=/^[a-zA-Z]+$/
         if (!rjx.test(e))
         {
             this.setState({InvalidAddr:"Incorrect"})
         }
         else {
             this.setState({InvalidAddr:"correct"})
         }

     }
    // componentDidMount() {
    //     this.callApi()
    // }
    // async callApi(){
    //     let api = await fetch('https://dummyjson.com/products/1')
    //     let json = await api.json()
    //     this.setState(
    //         {data:json.images}
    //     )
    // }

    render() {
        return(
            <View style={{flex:1}}>
                <TextInput style={{borderWidth:5, margin:2}} maxLength={5}/>
                <TextInput style={{borderWidth:5, margin:2}} keyboardType={"numeric"} />
                <TextInput style={{borderWidth:5, margin:2}}
                onChangeText={(e)=>{this.checkAlpha(e)}}/>
                <Text>{this.state.InvalidAddr}</Text>
            </View>

        )
    }
}

export default App;
