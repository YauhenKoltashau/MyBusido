import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {statePropsType} from "./redux/state";


export const renderEntireState = (state:statePropsType) => {
    ReactDOM.render(<App state={state}
        />, document.getElementById('root')
    );
}

