import axios, { AxiosRequestConfig } from 'axios'

interface Data {
  [k: string]: any
}

const request = axios.create({
  baseURL: 'ulr-of-api',
})

const api = {
  post: async (path: string, sendData?: Data, config?: AxiosRequestConfig): Promise<any> => {
    const token = localStorage.getItem('token-in-local')

    const axiosConfig = token
      ? {
          headers: {
            authorization: `Bearer ${token}`,
          },
          ...config,
        }
      : config

    try {
      const { data } = await request.post(path, sendData, axiosConfig)
      return data
    } catch (error) {
      return error.response.data
    }
  },

  get: async (path: string, config?: AxiosRequestConfig): Promise<any> => {
    const token = localStorage.getItem('token-in-local')

    const axiosConfig = token
      ? {
          headers: {
            authorization: `Bearer ${token}`,
          },
          ...config,
        }
      : config

    try {
      const { data } = await request.get(path, axiosConfig)
      return data
    } catch (error) {
      return error.response.data
    }
  },
}

export default api
