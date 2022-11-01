import React, {Component, useState} from 'react'
import {
    Text,
    View, Button, FlatList
} from 'react-native'

class App extends Component{
    constructor()
    {
        super()
        this.state={
            data:[
                {name:'Sidd J',email:'mail1'},
                {name:'D Jack-1',email:'mail2'},
                {name:'D Jack2',email:'mail3'},
                {name:'D Jack3',email:'mail4'},
                {name:'D Jack4',email:'mail5'},
                {name:'D Jack5',email:'mail6'}
            ]
        }
    }
    render() {
        return(
            <View style={{flex:1}}>
                <Text>Flat List</Text>
                    <FlatList data={this.state.data}
                    renderItem={({item})=><Text style={{fontSize:100}}> {item.email} </Text> }/>
            </View>
        )
    }
}

export default App;
