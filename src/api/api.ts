import axios, {AxiosResponse} from "axios";
import {UserType} from "../redux/users-reducer";

export type UsersDataResponseType = {
    error: boolean | null,
    totalCount: number,
    items: Array<UserType>
}

export type ProfileDataResponseType = {
    aboutMe: string | null,
    contacts: {
        facebook: string | null,
        website: string | null,
        vk: string | null,
        twitter: string | null,
        github: string | null,
        instagram: string | null,
        mainLink: string | null,
        youtube: string | null
    },
    fullName: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    photos: {
        small: string | null,
        large: string | null
    },
    userId: number
}

export type AuthResponseType = {
    resultCode: number,
    messages: Array<string>,
    data: {
        id: number,
        email: string,
        login: string
    }
}


export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "262e2c2b-b3e7-4ca9-aebd-afd6b759e25e"
    }
});

export const usersAPI = {
    getUsers (currentPage: number = 1, pageSize: number = 10) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response: AxiosResponse<UsersDataResponseType>) => {
                return response.data;
            });
    },
    getProfile (userId: string | undefined) {
        return instance
            .get(`profile/${userId}`)
            .then((response: AxiosResponse<ProfileDataResponseType>) => {
                return response.data;
            });
    },
    unFollow (id: number) {
        return instance
            .delete(`follow/${id}`)
    },
    follow (id: number) {
        return instance
            .post(`follow/${id}`)
    },
    getAuth () {
        return instance
            .get(`auth/me`)
            .then((response: AxiosResponse<AuthResponseType>) => {
                return response.data;
            });
    }
}
