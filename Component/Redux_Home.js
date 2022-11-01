import React from "react"
import {
    Text,
    View,
    Button,Image
} from "react-native"

const Redux_Home = ()=>{
    const Price =10000
    return(
        <View>
            <Button title={"Cart"}></Button>
            <Image style={{
                width: 80,
                height: 80,
                marginRight: 10,
                marginBottom: 12,
                marginTop: 12}}
                source={require('./26804039.jpg') }
            />
            <Text style={{fontSize:60}}>Iphone</Text>
            <Text style={{fontSize:60}}>{Price} Rs.</Text>
            <Button title={"add to cart"}></Button>

        </View>
    )
}

export default Redux_Home;
