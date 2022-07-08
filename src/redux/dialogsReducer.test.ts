import {addMessageAC, createNewMessageUserAC, dialogsReducer} from "./dialogsReducer";
import {v1} from "uuid";

test('new message should be added', ()=>{
    let state = {
        dialogs: [
            {id: v1(), name: "Yauhen"},
            {id: v1(), name: "Irina"},
            {id: v1(), name: "Sergey"},
            {id: v1(), name: "Pavel"},
            {id: v1(), name: "Rolan"},
            {id: v1(), name: "Roman"},
            {id: v1(), name: "Igor"},
            {id: v1(), name: "Rustam"}
        ],
        messages: [
            {id: v1(), message: "Hi, man!"},
            {id: v1(), message: "How is your progress?"},
            {id: v1(), message: "Anyone be able to become a programmer"},
        ],
        newMessageUser: "",

    }
    let testAddNewMessageToState = dialogsReducer(state,createNewMessageUserAC('new message from user'))
    expect(testAddNewMessageToState.newMessageUser).toBe('new message from user')
    expect(state).not.toBe(testAddNewMessageToState)
    expect(testAddNewMessageToState.newMessageUser).not.toBe(state.newMessageUser)
    expect(state.newMessageUser).toBe('')
    let testAddMessage = dialogsReducer(testAddNewMessageToState, addMessageAC())
    expect(testAddMessage.messages.length).toBe(4)
    expect(testAddMessage.messages[3].message).toBe('new message from user')
    expect(testAddMessage.newMessageUser).toBe('')
    expect(testAddMessage).not.toBe(testAddNewMessageToState)

})
