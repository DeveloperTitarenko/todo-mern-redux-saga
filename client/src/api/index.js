import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
  
})

export const postDataToApi = async (route, data) => {
  return await axiosInstance.post(route, data)
}

export const getDataFromApi = async (route, params = '') =>{
  return await axiosInstance.get(`${route}${params}`)
}

export const deleteTaskId = async (route, params = '') => {
  return await axiosInstance.delete(`${route}${params}`)
}
export const updateTaskId = async (route, params = '', data) => {
  return await axiosInstance.patch(`${route}${params}`, data)
}

export const updateUserId = async (route, params = '', data) => {
  return await axiosInstance.patch(`${route}${params}`, data)
}
