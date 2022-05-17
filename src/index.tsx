import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import StoreContext from "./StoreContext";


let renderEntireState = () => {

    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App/>
            </StoreContext.Provider>
        </BrowserRouter>, document.getElementById('root')

    );
}
renderEntireState()
store.subscribe(renderEntireState)
