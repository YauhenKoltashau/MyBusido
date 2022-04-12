import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Content} from "./components/Content/Content";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {dialogsType, messagesType, postsDataType} from "./index";

export type postsAppPropsType = {
    postData: Array<postsDataType>
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
}

const App = (props: postsAppPropsType) => {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>

                    <Route path={'/dialogs'} render={() => <Dialogs dialogs={props.dialogs}
                                                                    messages={props.messages}
                    />}/>
                    <Route path={'/profile'} render={() => <Content postsData={props.postData}/>}/>
                </div>


                {/*<AppTitle title={"This is APP component"}/>
            <AppTitle title={"My friends"}/>
            <Accordion title={"Menu"} colapsed={false}/>
            <Accordion title={"Users"} colapsed={true}/>
            <Rating value={5}/>*/}

            </div>
        </BrowserRouter>
    );
}
/*type AppTitlePropsType = {
    title: string
}
const AppTitle: React.FC<AppTitlePropsType> = (props) => {
    return <div>{props.title}</div>
}*/

export default App;
