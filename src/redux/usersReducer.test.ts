import {v1} from "uuid";
import {FollowAC, SetUsersAC, UnfollowAC, UsersReducer, UsersType} from "./usersReducer";



// test('followed should be true', ()=>{
//
//     const Users2:UsersType = [
//         {id:v1(), fullName:"Nikita K",followed: true,photoUrl:'',status:'',location:{city:{id:v1(),title:'Minsk'},country:{id:v1(),title:'Belarus'}}}
//     ]
//     const Users = [
//         {id:v1(), fullName:"Rustam G",followed: true,photoUrl:'',status:'',location:{city:{id:v1(),title:'Minsk'},country:{id:v1(),title:'Belarus'}}},
//         {id:v1(), fullName:"Yauhen K",followed: false,photoUrl:'',status:'',location:{city:{id:v1(),title:'Minsk'},country:{id:v1(),title:'Belarus'}}},
//         {id:v1(), fullName:"Pavel T",followed: true,photoUrl:'',status:'',location:{city:{id:v1(),title:'Svetly'},country:{id:v1(),title:'Belarus'}}}
//     ]
//     let followedUser = UsersReducer(Users,FollowAC(Users[1].id))
//     expect(Users).not.toBe(followedUser)
//     expect(followedUser[1].followed).toBe(true)
//
//     let unfollowedUser = UsersReducer(Users, UnfollowAC(Users[0].id))
//     expect(Users).not.toBe(unfollowedUser)
//     expect(unfollowedUser[0].followed).toBe(false)
//
//     let setUsers = UsersReducer (Users, SetUsersAC(Users2))
//     expect(setUsers).not.toBe(Users)
//     expect(setUsers[3].id).toBe(Users2[0].id)
//     expect(setUsers.length).toBe(4)
// })