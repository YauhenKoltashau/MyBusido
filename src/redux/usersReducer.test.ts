
import {
    followUser,
    setCurrentPage, setIsFetching,
    setTotalUsers,
    setUsers, setUsersOnPage,
    unFollowUser,
    UsersReducer, initialStateType, setFollowingInProgress
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
        isFetching:false,
        isFollowingInProgress: []
    }


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
        isFetching:false,
        isFollowingInProgress: []
    }
    let followedUser = UsersReducer(state,followUser(state.users[1].id))
    expect(state).not.toBe(followedUser)
    expect(followedUser.users[1].followed).toBe(true)

    let unfollowedUser = UsersReducer(state, unFollowUser(state.users[0].id))
    expect(state).not.toBe(unfollowedUser)
    expect(unfollowedUser.users[0].followed).toBe(false)

    let setNewUsers = UsersReducer (state, setUsers(state2.users))
    expect(setNewUsers).not.toBe(state)
    expect(setNewUsers.users[0].id).toBe(state2.users[0].id)
    expect(setNewUsers.users.length).toBe(1)

    let getTotalUsers = UsersReducer (state, setTotalUsers(1000))
    expect(state.totalCount).toBe(0)
    expect(getTotalUsers.totalCount).toBe(1000)

    let setNewCurrentPage = UsersReducer(state, setCurrentPage(3))
    expect(state.currentPageNumber).toBe(1)
    expect(setNewCurrentPage.currentPageNumber).toBe(3)

    let setNewUsersOnPage = UsersReducer(state,setUsersOnPage(5))
    expect(state.usersOnPage).toBe(10)
    expect(setNewUsersOnPage.usersOnPage).toBe(5)

    let setValueIsFetching = UsersReducer(state, setIsFetching(true))
    expect(state.isFetching).toBe(false)
    expect(setValueIsFetching.isFetching).toBe(true)

    let setIsFollowingInProgress = UsersReducer(state, setFollowingInProgress(false, 1289))
    expect(state.isFollowingInProgress).toBe(false)
    expect(setIsFollowingInProgress.isFollowingInProgress).toBe(true)

})