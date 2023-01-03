import React from 'react';
import './App.css';
import {HashRouter as Router, Redirect, Route, Switch, withRouter} from "react-router-dom";
import {NavBarContainer} from "./components/Navbar/NavBarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Preloader} from "./components/common/Preloader/preloader";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeAppThunk} from "./redux/AppReducer";
import store, {AppStateType} from "./redux/redux-store";
import {withlazyLoading} from "./hoc/withlazyLoading";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Content/ProfileContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));


class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeAppThunk()

    }


    render() {
        if (!this.props.isInitialized) {
            return <Preloader/>
        }
        return (
            <div className={"app-wrapper"}>
                <HeaderContainer/>
                <NavBarContainer/>

                <div className={"app-wrapper-content"}>
                    <Switch>
                        <Route exact path={'/'} render={() => <Redirect to={'/login'}/>}/>
                        <Route path={'/dialogs'} render={withlazyLoading(DialogsContainer)}/>
                        <Route path={'/profile/:userId?'} render={withlazyLoading(ProfileContainer)}/>
                        <Route path={'/users'} render={() => <UsersContainer/>}/>
                        <Route path={'/news'} render={() => <div>News</div>}/>
                        <Route path={'/music'} render={() => <div>Music</div>}/>
                        <Route path={'/settings'} render={() => <div>Settings</div>}/>
                        <Route path={'/login'} render={withlazyLoading(Login)}/>
                        <Route path={'*'} render={() => <div> 404 Not found</div>}/>

                    </Switch>
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


const AppContainer = compose<React.ComponentType>(withRouter, connect(mapStateToProps, {initializeAppThunk}))(App)

const SocialNetworkApp = () => {
    return (
        // <div>MY APP</div>
        <Router
            // basename={process.env.PUBLIC_URL}
        >
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </Router>
    )
}
export default SocialNetworkApp