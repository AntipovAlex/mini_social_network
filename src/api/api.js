import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "a5cc0e28-98ea-4601-b5da-e18d58eb70c8"
    }
    });

export const usersApi = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    getMe() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    unFollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    }

}

export const profileApi = {
    getProfileUser(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response => response.data)

    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
            .then(response => response.data)
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': `multipart/form-data`
            }
        })
            .then(response => response.data)
    }
}

 export const authApi = {
     login(email, password, rememberMe = false) {
         return instance.post(`auth/login`, {email, password, rememberMe} )
             .then(response => response.data)
     },
    logout(){
         return instance.delete(`auth/login`)
             .then(response => response.data)
    }
 }