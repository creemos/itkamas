import axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '5dac9a1e-a02a-41af-bba4-c25de3ffd27c'
    }
})

export const UserAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
    },
    unfollowUser(id: number) {
        return instance.delete(`follow/${id}`)
    },

    followUser(id: number) {
        return instance.post(`follow/${id}`)
    },
    getProfile(userId: number) {
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
    login(email: string | null, password: string | null, rememberMe: boolean = false){
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout(){
        return instance.delete(`auth/login`)
    }

}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    },
    updateProfile(data: any) {
        return instance.put(`profile`, data)
    },
    saveUsersPhoto(photos: any) {
        let formData = new FormData()
        formData.append('image', photos)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
              }
        })
    }



}