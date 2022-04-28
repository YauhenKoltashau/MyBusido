import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Content} from "./components/Content/Content";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {storeType } from "./redux/state";

type  postsAppPropsType = {
    store: storeType

}
const App = (props: postsAppPropsType) => {

    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar sideBar={props.store._state.sideBarPage.sideBar}/>
                <div className={"app-wrapper-content"}>

                    <Route path={'/dialogs'} render={() => <Dialogs dialogs={props.store.getState().dialogsPage.dialogs}
                                                                    messages={props.store.getState().dialogsPage.messages}
                    />}/>
                    <Route path={'/profile'} render={() => <Content postsData={props.store.getState().contentPage.postsData}
                                                                    // newMessage={props.state.contentPage.newMessage}
                                                                    // callBack={addPost}
                                                                    callBackAdd={props.store.addNewMessage.bind(props.store)}
                                                                    newPostText={props.store.getState().contentPage.newPostText}
                                                                    updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                    />}/>
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
