
import {
    FollowAC,
    initialStateType,
    SetCurrentPageAC,
    SetTotalUsersAC,
    SetUsersAC, setUsersOnPageAC,
    UnfollowAC,
    UsersReducer
} from "./usersReducer";



test('followed should be true', ()=>{

    const state2:initialStateType = {users: [
            {
                name: 'Yauhen',
                id: 12,
                uniqueUrlName: null,
                photos: {
                    small: null,
                    large: null
                },
                status: null,
                followed: false,
            }
        ],
        totalCount:0,
        currentPageNumber:1,
        usersOnPage:10}

    const state:initialStateType = {users:[
            {
                name: 'Pavel',
                id: 13,
                uniqueUrlName: null,
                photos: {
                    small: null,
                    large: null
                },
                status: null,
                followed: false
            },
            {
                name: 'Anton',
                id: 117,
                uniqueUrlName: null,
                photos: {
                    small: null,
                    large: null
                },
                status: null,
                followed: false
            },
            {
                name: 'Iryna',
                id: 1289,
                uniqueUrlName: null,
                photos: {
                    small: null,
                    large: null
                },
                status: null,
                followed: false
            }
        ],
        totalCount:0,
        currentPageNumber:1,
        usersOnPage:10}
    let followedUser = UsersReducer(state,FollowAC(state.users[1].id))
    expect(state).not.toBe(followedUser)
    expect(followedUser.users[1].followed).toBe(true)

    let unfollowedUser = UsersReducer(state, UnfollowAC(state.users[0].id))
    expect(state).not.toBe(unfollowedUser)
    expect(unfollowedUser.users[0].followed).toBe(false)

    let setUsers = UsersReducer (state, SetUsersAC(state2.users))
    expect(setUsers).not.toBe(state)
    expect(setUsers.users[0].id).toBe(state2.users[0].id)
    expect(setUsers.users.length).toBe(1)

    let getTotalUsers = UsersReducer (state, SetTotalUsersAC(1000))
    expect(state.totalCount).toBe(0)
    expect(getTotalUsers.totalCount).toBe(1000)

    let setCurrentPage = UsersReducer(state, SetCurrentPageAC(3))
    expect(state.currentPageNumber).toBe(1)
    expect(setCurrentPage.currentPageNumber).toBe(3)

    let setUsersOnPage = UsersReducer(state,setUsersOnPageAC(5))
    expect(state.usersOnPage).toBe(10)
    expect(setUsersOnPage.usersOnPage).toBe(5)
})