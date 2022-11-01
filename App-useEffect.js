import React, {Component, useEffect, useState} from "react";
import {
    Text,
    Button,
    ActivityIndicator,
    View
} from "react-native";

import Product from "./Component/Product";
function app(){
    const [count,setCount]=useState(0)
    const [data,setData]=useState("Wait till 5")
    useEffect(()=>{
        console.warn(count)
        if(count==5){
            setData("Wait is over")
        }
    })
    return(
        <View>
            <Product data={data} count={count}/>
            <Button title={"Update"} onPress={()=>setCount(count+1)} />
        </View>
    );

}
export default app
