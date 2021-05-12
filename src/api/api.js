import axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '5dac9a1e-a02a-41af-bba4-c25de3ffd27c'
    }
})

export const UserAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
    },
    unfollowUser(id) {
        return instance.delete(`follow/${id}`)
    },

    followUser(id) {
        return instance.post(`follow/${id}`)
    },
    getProfile(userId) {
        return profileAPI.getProfile(userId)
    },
    auth() {
        return authAPI.auth()
    }
}

export const authAPI = {
    auth() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false){
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout(){
        return instance.delete(`auth/login`)
    }

}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    },
    saveUsersPhoto(photos) {
        let formData = new FormData()
        formData.append('image', photos)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
              }
        })
    }
}