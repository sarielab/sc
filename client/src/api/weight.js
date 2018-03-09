import Axios from 'axios'

import { BASE_URL } from '../config/base_url'

export const getAllWeight = () => Axios.get(`${BASE_URL}/weight`)
export const getWeight = id => Axios.get(`${BASE_URL}/weight/${id}`)
export const removeWeight = id => Axios.delete(`${BASE_URL}/weight/${id}`)
export const createWeight = data => Axios.post(`${BASE_URL}/weight`, data)
export const editWeight = (id, data) => Axios.put(`${BASE_URL}/weight/${id}`, data)