import {Button, Text, View} from "react-native";
import React ,{Component} from 'react'

const Product =(props)=>{
    return(
        <View>
                <Text style={{fontSize:60}}>
                    {props.count}
                </Text>
                <Text style={{fontSize:60}}>
                    {props.data}
                </Text>
        </View>
    );

}

export default Product
