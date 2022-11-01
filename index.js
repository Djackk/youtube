/**
 * @format
 */

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import {createStore} from 'redux'

import reducer from './reducers'
import {Provider} from "react-redux";
import Container from "./containers";


const store=createStore(reducer)
const reduxApp=()=>{
    return(
        <Provider store={store}>
            <Container />
        </Provider>
    );
}

AppRegistry.registerComponent(appName, () => reduxApp);
