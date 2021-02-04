import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "183fd219-3d1a-4835-afb7-a454835dc3c5"
    }
})

export const usersAPI = {
    getUsers (currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow (userId: string) {
       return  instance.post(`follow/${userId}`)
    },
    unfollow (userId: string) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile (userId: string) {
       return  instance.get(`profile/` + userId)

    }
}
export const authAPI = {
    me () {
       return  instance.get(`auth/me`)
    }
}



