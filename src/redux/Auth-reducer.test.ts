import {authReducer, AuthType} from "./Auth-reducer";
test("authMe function should be worked",()=>{
    const oldState:AuthType = {
        id: null,
        login:null,
        email: null,
        isAuth: false
    }
    const newState = authReducer(oldState,{type: "SET-USER-DATA", data:{id: 3286, login: "newLogin", email: "coolEmail.com"}})
    expect(newState).not. toBe(oldState)
    expect(newState.id).toBe(3286)
    expect(oldState.id).toBe(null)
    expect(newState).toEqual({id: 3286, login: "newLogin", email: "coolEmail.com",isAuth: true})
    expect(newState.isAuth).toBe(true)
})
