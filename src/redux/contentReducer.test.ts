import {v1} from "uuid";
import {addNewMessageAC, addPostAC, contentReducer, ProfileUserType, setUserProfile} from "./contentReducer";


test('message should be added to state', ()=>{
    let testState = {
        postsData: [
            {id: v1(), message: "It's my first post", likesCount: 12},
            {id: v1(), message: "How are you!", likesCount: 3}
        ],
        newPostText: "my post works",
        isFetching: false,
        profile:<ProfileUserType> {}
    }
    let profileUser:ProfileUserType = {
        "aboutMe": "я круто чувак 1001%",
        "contacts": {
            "facebook": "facebook.com",
            "website": null,
            "vk": "vk.com/dimych",
            "twitter": "https://twitter.com/@sdf",
            "instagram": "instagra.com/sds",
            "youtube": null,
            "github": "github.com",
            "mainLink": null
        },
        "lookingForAJob": true,
        "lookingForAJobDescription": "не ищу, а дурачусь",
        "fullName": "samurai dimych",
        "userId": 2,
        "photos": {
            "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        }
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

    let addProfileToState = contentReducer(testState, setUserProfile(profileUser))
    expect(addProfileToState.profile).toEqual(profileUser)
    expect(addProfileToState.profile.fullName).toBe("samurai dimych")
    expect(addProfileToState.profile.photos.small).toBeDefined()
})