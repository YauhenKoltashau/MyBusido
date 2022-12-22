import axios from "axios";

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': 'f2dd651a-2476-438b-bb64-0318d3a97401'
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
    logIn(email:string, password: string, rememberMe: boolean = false, captcha:string | null = null) {
        return authAPI.logIn(email, password, rememberMe, captcha)
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
    },
    saveProfile(profile:{}) {
        return instance.put('profile', profile).then((response=>response.data))
    },
    saveFoto(photoFile: UserPhotoType) {
        var formData = new FormData()
        formData.append('image', photoFile)
        return instance.put('/profile/photo',formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((response=> {
            return response.data

        }))
    }

}
export const authAPI = {
    logIn(email:string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
        return instance.post('/auth/login',{email, password, rememberMe, captcha })
    },
    logOut() {
        return instance.delete('/auth/login')
    }
}
export const securityAPI = {
    getCaptcha() {
        return instance.get('/security/get-captcha-url')
    },
}

export type UserPhotoType = string | Blob

