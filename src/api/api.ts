import  axios from "axios";
import {photosType, profileType} from "../types/types";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "a5cc0e28-98ea-4601-b5da-e18d58eb70c8"
    }
    });

type meResponseType = {
    data: {
        email: string
        id: number
        login: string
    }
    resultCode: ResultCodeEnum
    messages: Array<string>
}
type loginResponseType = {
    data: {
        userId : number
    }
    resultCode: ResultCodeEnum | ResultCodeForCaptcha
    messages: Array<string>
}
type getUsersResponseType = {
    id: number
    name: string
    status: string | null
    photos : photosType
    followed: boolean
}
type unFollowResponseType = {
    resultCode: ResultCodeEnum
    messages: Array<string>
    data: {}
}

export enum ResultCodeEnum {
    Success = 0,
    Error = 1
}
export enum ResultCodeForCaptcha {
    Captcha = 10
}

export const usersApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<getUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    getMe()  {
        return instance.get<meResponseType>(`auth/me`)
            .then(response => response.data)
    },
    unFollow(userId: number) {
        return instance.delete<meResponseType>(`follow/${userId}`)
            .then(response => response.data)
    },
    follow(userId: number) {
        return instance.post<meResponseType>(`follow/${userId}`)
            .then(response => response.data)
    }

}

export const profileApi = {
    getProfileUser(userId: number) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
            .then(response => response.data)

    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
            .then(response => response.data)
    },
    savePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': `multipart/form-data`
            }
        })
            .then(response => response.data)
    },
    saveProfile(profile: profileType) {
        return instance.put(`profile`, profile)
            .then(response => response.data)
    }
}

 export const authApi = {
     login(email: string, password: string, rememberMe: boolean = false,captcha: string | null ) {
         return instance.post<loginResponseType>(`auth/login`, {email, password, rememberMe,captcha} )
             .then(response => response.data)
     },
    logout(){
         return instance.delete(`auth/login`)
             .then(response => response.data)
    }
 }
export const securityApi = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
            .then(response => response.data)
    }
}
