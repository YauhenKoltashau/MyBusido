import axios from "axios";

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': '26ffa3e6-cad0-4cf9-8170-904cae9d9ac2'
    }
}
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    ...settings
})
export const userAPI = {
    getUsers(currentPageNumber: number = 1, usersOnPage: number = 10) {
        return instance.get(`/users?page=${currentPageNumber}&count=${usersOnPage}`).then(response => response.data)
    },
    getUserById(userId: number) {
        return profileAPI.getUserById(userId)
    },
    authMe() {
        return instance.get('/auth/me')
    },
    followUser(userId: number) {
        return instance.post(`/follow/${userId}`)
    },
    unFollowUser(userId: number) {
        return instance.delete(`/follow/${userId}`)
    },
    logIn(email:string, password: string, rememberMe: boolean = false) {
        return authAPI.logIn(email, password, rememberMe)
    },
    logOut() {
        return authAPI.logOut()
    }

}
export const profileAPI = {
    getUserById(userId: number) {
        return instance.get('/profile/' + userId).then(response => response.data)
    },
    getStatus(userId: number) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus(status: string) {
        return instance.put('profile/status',{status}).then((response=>response.data))
    }

}
export const authAPI = {
    logIn(email:string, password: string, rememberMe: boolean = false) {
        return instance.post('/auth/login',{email, password, rememberMe })
    },
    logOut() {
        return instance.delete('/auth/login')
    }
}


