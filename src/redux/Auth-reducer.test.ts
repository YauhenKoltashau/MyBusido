import {authReducer, AuthType, setAuthUserData, setLogOut} from "./Auth-reducer";
test("authMe function should be worked",()=>{
    const oldState:AuthType = {
        id: null,
        login:null,
        email: null,
        isAuth: false,
        captchaUrl: null,
    }
    const action = setAuthUserData(3286, "newLogin", "coolEmail.com",true)
    const newState = authReducer(oldState,action)
    expect(newState).not. toBe(oldState)
    expect(newState.id).toBe(3286)
    expect(oldState.id).toBe(null)
    expect(newState).toEqual({id: 3286, login: "newLogin", email: "coolEmail.com",isAuth: true})
    expect(newState.isAuth).toBe(true)
})
test("logOut should be worked",()=>{
    const oldState:AuthType = {
        id: 45667,
        login:"mdnckd",
        email: "mdnckd@gmail.com",
        isAuth: true,
        captchaUrl: null,
    }
    const action = setLogOut(null, null, null,false)
    const newState = authReducer(oldState,action)
    expect(newState).not. toBe(oldState)
    expect(newState.id).toBe(null)
    expect(oldState.id).toBe(45667)
    expect(newState).toEqual({id: null, login: null, email: null,isAuth: false})
    expect(newState.isAuth).toBe(false)
})
