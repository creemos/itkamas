import axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '20abb38d-9d20-430d-b607-eb6ffb3049c4'
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
    }
}