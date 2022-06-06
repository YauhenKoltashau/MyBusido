
import {
    FollowAC,
    initialStateType,
    SetCurrentPageAC, SetIsFetchingAC,
    SetTotalUsersAC,
    SetUsersAC, SetUsersOnPageAC,
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
        usersOnPage:10,
        isFetching:false}

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
        usersOnPage:10,
        isFetching:false}
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

    let setUsersOnPage = UsersReducer(state,SetUsersOnPageAC(5))
    expect(state.usersOnPage).toBe(10)
    expect(setUsersOnPage.usersOnPage).toBe(5)

    let setIsFetching = UsersReducer(state, SetIsFetchingAC(true))
    expect(state.isFetching).toBe(false)
    expect(setIsFetching.isFetching).toBe(true)
})