import {v1} from "uuid";
import {
    addPostAC,
    contentReducer,
    ProfileUserType,
    setUserProfile,
    setStatus, deletePostAC, ContentPageType
} from "./contentReducer";

let postId1: string
let postId2: string
let testState:ContentPageType
beforeEach(()=>{
    postId1 = v1()
    postId2 = v1()

    testState = {
        postsData: [
            {id: postId1, message: "It's my first post", likesCount: 12},
            {id: postId2, message: "How are you!", likesCount: 3}
        ],
        profile:<ProfileUserType> {},
        currentStatus: 'write your current status'
    }
})



test('message should be added to state', ()=>{

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

    let addPostState = contentReducer(testState,addPostAC("newPost"))
    expect(addPostState.postsData.length).toBe(3)
    expect(addPostState).not.toBe(testState)
    expect(addPostState.postsData[2].message).toBe("newPost")
    // expect(addPostState.newPostText).toBe('')

    let addProfileToState = contentReducer(testState, setUserProfile(profileUser))
    expect(addProfileToState.profile).toEqual(profileUser)
    expect(addProfileToState.profile.fullName).toBe("samurai dimych")
    expect(addProfileToState.profile.photos.small).toBeDefined()
    let statusProfile = contentReducer(testState,setStatus('new status'))
    expect(statusProfile).not.toBe(testState)
    expect(statusProfile.currentStatus).toBe('new status')
})

test('the post should be deleted', ()=>{
    const action = deletePostAC(postId2)
    let endState = contentReducer(testState, action)

    expect(endState.postsData.length).toBe(1)
})