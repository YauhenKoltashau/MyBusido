import React from 'react';
import './App.css';
import {Route, withRouter} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {NavBarContainer} from "./components/Navbar/NavBarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Content/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {Preloader} from "./components/Preloader/preloader";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeAppThunk} from "./redux/AppReducer";
import {AppStateType} from "./redux/redux-store";


class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeAppThunk()

    }

    render() {
        if(!this.props.isInitialized){
            return <Preloader/>
        }
        return (
            <div className={"app-wrapper"}>
                <HeaderContainer/>
                <NavBarContainer/>

                <div className={"app-wrapper-content"}>

                    <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                    <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                    <Route path={'/login'} render={() => <Login/>}/>
                </div>
            </div>

        );
    }
}

type AppPropsType = mapDispatchToPropsType & mapStateToPropsType
type mapStateToPropsType = {
    isInitialized: boolean
}
type mapDispatchToPropsType = {
    initializeAppThunk: () => void
}
const mapStateToProps = (state: AppStateType) => {
    return {
        isInitialized: state.initialize.isInitialized
    }
}



export default compose<React.ComponentType>(withRouter, connect(mapStateToProps,{initializeAppThunk}))(App);
