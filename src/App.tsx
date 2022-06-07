import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {Header} from "./components/Header/Header";
import {Content} from "./components/Content/Content";
import {Route} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {NavBarContainer} from "./components/Navbar/NavBarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Content/ProfileContainer";

const App = () => {
    return (
            <div className={"app-wrapper"}>
                <Header/>
                <NavBarContainer/>

                <div className={"app-wrapper-content"}>

                    <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                    <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                </div>
                {/*<AppTitle title={"This is APP component"}/>
            <AppTitle title={"My friends"}/>
            <Accordion title={"Menu"} colapsed={false}/>
            <Accordion title={"Users"} colapsed={true}/>
            <Rating value={5}/>*/}
            </div>

    );
}
/*type AppTitlePropsType = {
    title: string
}
const AppTitle: React.FC<AppTitlePropsType> = (props) => {
    return <div>{props.title}</div>
}*/

export default App;
