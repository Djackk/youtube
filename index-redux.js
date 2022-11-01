/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {createStore} from 'redux'
import {Provider} from "react-redux";
import rootReducer from './Reducer/index'
import HomeContainer from "./Container/Redux_HomeContainer";
const store = createStore(rootReducer)
console.warn("store",{store})
const reduxApp=()=>{
    return(
        <Provider store={store}>
            <HomeContainer />
        </Provider>
    );
}

AppRegistry.registerComponent(appName, () => App);
