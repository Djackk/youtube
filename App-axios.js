import React, {Component, useEffect, useState} from "react";
import {
    Text,
    Button,
    ActivityIndicator,
    View, Modal
} from "react-native";

import axios from "axios";

class app extends Component{
    constructor() {
        super();
        this.state={
            data:[]
        }
    }

    componentDidMount() {
        this.getApi()
    }
    async getApi(){
        const resp = await axios.get('https://dummyjson.com/products/1')
        this.setState({data:resp.images})
        console.warn(this.state.data)
    }

    render() {
        return (

            <View>
                {
                        <View>{

                                <Text>{this.state.data}</Text>

                        }</View>

                }
            </View>
        );
    }
}
export default app
