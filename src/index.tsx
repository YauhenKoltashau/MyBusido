import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/redux-store";

let renderEntireState = () => {

    ReactDOM.render(<App store={store}
        />, document.getElementById('root')
    );
}
renderEntireState()
store.subscribe(renderEntireState)
