import {
  FETCH_WEIGHT_SUCCESS, FETCH_WEIGHT_LOADING, FETCH_WEIGHT_ERROR,
  FETCH_ONE_WEIGHT_SUCCESS, FETCH_ONE_WEIGHT_LOADING, FETCH_ONE_WEIGHT_ERROR,
  ADD_WEIGHT_SUCCESS, ADD_WEIGHT_LOADING, ADD_WEIGHT_ERROR,
  UPDATE_WEIGHT_SUCCESS, UPDATE_WEIGHT_LOADING, UPDATE_WEIGHT_ERROR,
  DELETE_WEIGHT_SUCCESS, DELETE_WEIGHT_LOADING, DELETE_WEIGHT_ERROR
} from '../actions/constant'

const initialState = {
  weights: [],
  weight: {},
  isFetching: false,
  fetchError: false,
  fetchErrorMessage: '',
  isUpdated: true,
  isUpdating: false,
  updateError: false,
  updateErrorMessage:'',
  isDeleted: true,
  isDeleting: false,
  deleteError: false,
  deleteErrorMessage:'',
}

const addWeightSuccess = (state, payload) => {
  const newState = {...state, weights: [...state.weights, payload], isUpdated:true, isUpdating: false, updateError: false, updateErrorMessage:''}
  return newState
}
const updateWeightSuccess = (state, payload) => {
  const newWeight = state.weight.map(v => {
    if(v._id !== payload._id) return v
    return payload
  })
  const newState = {...state, weights: newWeight, isUpdated:true, isUpdating: false, updateError: false, updateErrorMessage:''}
  return newState
}
const saveWeightFailed = (state, payload) => {
  return {...state, isUpdating: false, updateError: true, updateErrorMessage: payload}
}
const saveWeightLoading = (state) => {
  return {...state, isUpdating: true}
}

const fetchWeight = (state, payload) => {
  const newState = {...state, weights:payload, fetchError: false, isFetching: false}
  return newState
}
const fetchOneWeight = (state, payload) => {
  const newState = {...state, weight:payload, fetchError: false, isFetching: false}
  return newState
}
const fetchWeightFailed = (state, payload) => {
  return {...state, isFetching:false, fetchError:true, fetchErrorMessage: payload }
}
const fetchWeightLoading = (state) => {
  return {...state, isFetching: true}
}

const deleteWeightSuccess = (state, payload) => {
  const newWeight = state.weights.filter(v => v._id !== payload)
  const newState = {...state, weights: newWeight, isDeleted:true, isDeleting: false, deleteError: false, deleteErrorMessage:''}
  return newState
}
const deleteWeightFailed = (state, payload) => {
  return {...state, isDeleting: false, deleteError: true, deleteErrorMessage: payload}
}
const deleteWeightLoading = (state) => {
  return {...state, isDeleting: true}
}

export const weightReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_WEIGHT_SUCCESS: return addWeightSuccess(state, action.payload)
    case ADD_WEIGHT_ERROR: case UPDATE_WEIGHT_ERROR : return saveWeightFailed(state, action.payload)
    case ADD_WEIGHT_LOADING: case UPDATE_WEIGHT_LOADING: return saveWeightLoading(state, action.payload)
    case UPDATE_WEIGHT_SUCCESS: return updateWeightSuccess(state, action.payload)
    case DELETE_WEIGHT_SUCCESS: return deleteWeightSuccess(state, action.payload)
    case DELETE_WEIGHT_ERROR: return deleteWeightFailed(state, action.payload)
    case DELETE_WEIGHT_LOADING: return deleteWeightLoading(state, action.payload)
    case FETCH_ONE_WEIGHT_SUCCESS: return fetchOneWeight(state, action.payload)
    case FETCH_WEIGHT_ERROR: case FETCH_ONE_WEIGHT_ERROR:  return fetchWeightFailed(state, action.payload)
    case FETCH_WEIGHT_LOADING: case FETCH_ONE_WEIGHT_LOADING: return fetchWeightLoading(state)
    case FETCH_WEIGHT_SUCCESS: return fetchWeight(state, action.payload)
    default: return state
  }
}