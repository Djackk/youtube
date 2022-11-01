import React, {Component, useEffect, useState} from "react";
import {
    Text,
    Button,
    ActivityIndicator,
    View, Modal
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Icon from 'react-native-vector-icons/FontAwesome5'
import Product from "./Component/Product";

class app extends Component{
    constructor() {
        super();
        this.state={
            isVisible:false
        }
    }
    render() {
        return (
            <View>
                <Text>
                    Normal Text
                </Text>
                <Button title={"Toggle"} onPress={()=>this.setState({isVisible:true})}></Button>
                <Modal visible={this.state.isVisible} transparent={true} >
                    <View style={{backgroundColor:"#111111aa",flex:1}}>
                        <View style={{flex:1,backgroundColor:"white",margin:50,borderRadius:8}}>
                            <Text style={{fontSize:30}}>
                            Modal          <Icon name="comments" size={30} color="#900" />
                        </Text>
                            <Icon name="comments" size={30} color="#900" />
                            <FontAwesome5 name={'comments'} size={50}/>
                            <Button title={"Toggle"} onPress={()=>this.setState({isVisible:false})}></Button>
                        </View>

                    </View>

                </Modal>
            </View>

        );
    }
}
export default app
