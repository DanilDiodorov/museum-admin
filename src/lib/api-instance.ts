import axios, { Axios, CreateAxiosDefaults } from 'axios'

const optionsClassic: CreateAxiosDefaults = {
    withCredentials: true,
    baseURL: process.env.REACT_APP_API_URL,
}

// const optionsWithAuth: CreateAxiosDefaults = {
//     withCredentials: false,
//     baseURL: process.env.NEXT_PUBLIC_API_URL,
// }

export const axiosClassic: Axios = axios.create(optionsClassic)

// export const axiosWithAuth: Axios = axios.create(optionsWithAuth)

// axiosWithAuth.interceptors.request.use((config) => {
//     config.headers.Authorization = `Bearer ${cookieService.get(
//         ETokens.accessToken,
//     )}`
//     return config
// })

// axiosWithAuth.interceptors.response.use(
//     (config) => config,
//     (error) => {
//         if (
//             error.response?.status === 401 &&
//             error.config &&
//             !error.config._isRetry
//         ) {
//             cookieService.remove(ETokens.accessToken)
//         }
//         throw error
//     },
// )
