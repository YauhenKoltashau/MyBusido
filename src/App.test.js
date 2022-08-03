import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SocialNetworkApp from './App';


it('renders without crashing', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<SocialNetworkApp/>, div);
    ReactDOM.unmountComponentAtNode(div)
})