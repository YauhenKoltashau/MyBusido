import React from "react";
import {StorePropsType} from "./redux/redux-store";

type ProviderPropsType = {
    store: StorePropsType
    children:React.ReactNode
}
const StoreContext = React.createContext({} as StorePropsType)

export const Provider = (props: ProviderPropsType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContext