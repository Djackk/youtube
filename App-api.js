import React, {Component, useState} from 'react'
import {
    Text,
    View, Button, FlatList
} from 'react-native'

class App extends Component{
    constructor()
    {
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount() {
        this.callApi()
    }
    async callApi(){
        let api = await fetch('https://dummyjson.com/products/1')
        let json = await api.json()
        this.setState(
            {data:json.images}
        )
    }

    render() {
        console.warn(this.state.data)
        return(
            <View style={{flex:1}}>
                <Text style={{fontSize:100}}>APi call</Text>
                <FlatList
                data={this.state.data}
                renderItem={({item})=><Text>{item}</Text>}
                />
            </View>
        )
    }
}

export default App;
