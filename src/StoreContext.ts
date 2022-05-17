import React from "react";
import store, {StorePropsType} from "./redux/redux-store";
type ProviderPropsType = {
    value: StorePropsType
}
const StoreContext = React.createContext(store)

export const Provider = (props:ProviderPropsType) => {
    return
    
}
// {
//     let value = props.value
//     return (
//         <StoreContext
//
//         // <StoreContext.Provider value={value}>
//         //     {props.children}
//         // < /StoreContext.Provider>)
// }
export default StoreContext