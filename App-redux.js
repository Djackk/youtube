import React, {Component} from "react";
import {
    View
} from "react-native";
import Redux_HomeContainer from "./Container/Redux_HomeContainer";

class App extends Component{
    constructor() {
        super();
    }

    render() {
        return (
            <View>
                {
                        <View>{
                               <Redux_HomeContainer></Redux_HomeContainer>
                        }</View>
                }
            </View>
        );
    }
}
export default App
