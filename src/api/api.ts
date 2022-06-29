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
        return  instance.get(`/users?page=${currentPageNumber}&count=${usersOnPage}`).then(response=>response.data)
    },

    getUserById(userId: string) {
        return  instance.get('/profile/'+userId).then(response=>response.data)
    },

    authMe() {
        return  instance.get('/auth/me',
            {withCredentials: true})
    },

    followUser(userId: number) {
        return instance.post(`/follow/${userId}`)
    },
    unFollowUser(userId: number) {
        return instance.delete(`/follow/${userId}`)
    }

}


