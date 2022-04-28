import React from 'react';
import {store} from "./redux/state";

import ReactDOM from "react-dom";
import App from "./App";

let renderEntireState = () => {
    console.log('rerenderState1')
    ReactDOM.render(<App store={store}
        />, document.getElementById('root')
    );
}
renderEntireState()
store.subscriber(renderEntireState)
