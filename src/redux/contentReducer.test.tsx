import {v1} from "uuid";
import {addNewMessageAC, addPostAC, contentReducer} from "./contentReducer";


test('message should be added to state', ()=>{
    let testState = {
        postsData: [
            {id: v1(), message: "It's my first post", likesCount: 12},
            {id: v1(), message: "How are you!", likesCount: 3}
        ],
        newPostText: "my post works"
    }
    let addNewMessageState = contentReducer(testState, addNewMessageAC("new message") )
    expect(addNewMessageState.newPostText).toBe("new message")
    expect(addNewMessageState).not.toBe(testState)
    expect(testState.newPostText).toBe("my post works")
    let addPostState = contentReducer(addNewMessageState,addPostAC())
    expect(addPostState.postsData.length).toBe(3)
    expect(addPostState).not.toBe(addNewMessageState)
    expect(addPostState.postsData[2].message).toBe("new message")
    expect(addPostState.newPostText).toBe('')
})