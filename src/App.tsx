import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Content} from "./components/Content/Content";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {StorePropsType} from "./redux/redux-store";



type  postsAppPropsType = {
    store: StorePropsType
}
const App = (props: postsAppPropsType) => {
    const dialogsPage = props.store.getState().dialogPage
    const dispatch = props.store.dispatch
    const contentPage = props.store.getState().contentPage

    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar sideBar={props.store.getState().sideBarPage.sideBar}/>
                <div className={"app-wrapper-content"}>

                    <Route path={'/dialogs'} render={() => <Dialogs dialogs={dialogsPage.dialogs}
                                                                    messages={dialogsPage.messages}
                                                                    dispatch={dispatch.bind(props.store)}
                                                                    newMessageUserText={dialogsPage.newMessageUser}
                    />}/>
                    <Route path={'/profile'} render={() => <Content postsData={contentPage.postsData}
                                                                    dispatch={dispatch.bind(props.store)}
                                                                    newPostText={contentPage.newPostText}

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
