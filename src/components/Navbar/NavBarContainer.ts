import {Navbar} from "./Navbar";
import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
// export const NavBarContainer = () => {
//     return{
//         <StoreContext.Consumer>
//         {(store)=>{
//         let sideBar = store.getState().sideBarPage.sideBar
//         return(
//             <Navbar sideBar={sideBar}/>
//     )
//
//     }}
//     </StoreContext.Consumer>
//     }
// }
let mapStateToProps = (state: AppStateType) => {
    return{
        sideBar: state.sideBarPage.sideBar
    }
}
let mapDispatchToProps = () => {
    return{

    }
}
export const NavBarContainer = connect (mapStateToProps,mapDispatchToProps)(Navbar)