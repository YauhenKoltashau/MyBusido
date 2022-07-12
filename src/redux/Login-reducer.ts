import {Dispatch} from "redux";
// import {userAPI} from "../api/api";
//
// export type loginType = {
//     login: null | string,
//     password: null | string,
//     rememberMe: null | boolean
// }
// const initialState: loginType = {
//     login: null,
//     password: null,
//     rememberMe: null
// }
// export const loginThunk = (login:string, password: string, rememberMe:boolean ) => {
//     return (dispatch: Dispatch) => {
//         userAPI.login(login, password, rememberMe)
//             .then(response => {
//                 if (response.data.resultCode === 0) {
//                     let {id, login, email} = response.data.data
//                     dispatch(loginUser(id, login, email))
//                 }
//             })
//     }
// }
//
// export const loginReducer = (state = initialState, action: loginUserType): loginType => {
//     switch (action.type) {
//         case "LOGIN":
//             return {
//                 ...state,login: action.data.login,password: action.data.password,rememberMe: action.data.rememberMe
//
//             }
//         default:
//             return state
//     }
//
// }
// export type loginUserType = ReturnType<typeof loginUser>
// export const loginUser = (login: string, password: string, rememberMe:boolean) => ({
//     type: "LOGIN",
//     data: {login, password, rememberMe}
// })