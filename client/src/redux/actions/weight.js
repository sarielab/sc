import { getAllWeight, getWeight, removeWeight, createWeight, editWeight } from '../../api/weight'
import {
  FETCH_WEIGHT_SUCCESS, FETCH_WEIGHT_LOADING, FETCH_WEIGHT_ERROR,
  FETCH_ONE_WEIGHT_SUCCESS, FETCH_ONE_WEIGHT_LOADING, FETCH_ONE_WEIGHT_ERROR,
  ADD_WEIGHT_SUCCESS, ADD_WEIGHT_LOADING, ADD_WEIGHT_ERROR,
  UPDATE_WEIGHT_SUCCESS, UPDATE_WEIGHT_LOADING, UPDATE_WEIGHT_ERROR,
  DELETE_WEIGHT_SUCCESS, DELETE_WEIGHT_LOADING, DELETE_WEIGHT_ERROR
} from './constant'

export const fetchWeightSuccess = weights => ({
  type: FETCH_WEIGHT_SUCCESS,
  payload: weights
})
export const fetchWeightError = err => ({
  type: FETCH_WEIGHT_ERROR,
  payload: err
})
export const fetchWeight = () => dispatch => {
  dispatch({type: FETCH_WEIGHT_LOADING})
  getAllWeight()
    .then(res => dispatch(fetchWeightSuccess(res.data)))
    .catch(err => dispatch(fetchWeightError(err)))
}

export const fetchOneWeightSuccess = weight => ({
  type: FETCH_ONE_WEIGHT_SUCCESS,
  payload: weight
})
export const fetchOneWeightError = err => ({
  type: FETCH_ONE_WEIGHT_ERROR,
  payload: err
})
export const fetchOneWeight = id => dispatch => {
  dispatch({type: FETCH_ONE_WEIGHT_LOADING})
  getWeight(id)
    .then(res => dispatch(fetchOneWeightSuccess(res.data)))
    .catch(err => dispatch(fetchOneWeightError(err)))
}

export const addWeightSuccess = weight => ({
  type: ADD_WEIGHT_SUCCESS,
  payload: weight
})
export const addWeightError = err => ({
  type: ADD_WEIGHT_ERROR,
  payload: err
})
export const addWeight = weight => dispatch => {
  dispatch({type: ADD_WEIGHT_LOADING})
  createWeight(weight)
    .then(res => dispatch(addWeightSuccess(res.data)))
    .catch(err => dispatch(addWeightError(err)))
}

export const updateWeightSuccess = weight => ({
  type: UPDATE_WEIGHT_SUCCESS,
  payload: weight
})

export const updateWeightError = err => ({
  type: UPDATE_WEIGHT_ERROR,
  payload: err
})
export const updateWeight = (id, weight) => dispatch => {
  dispatch({type: UPDATE_WEIGHT_LOADING})
  editWeight(id, weight)
    .then(res => dispatch(updateWeightSuccess(res.data)))
    .catch(err => dispatch(updateWeightError(err)))
}

export const deleteWeightSuccess = id => ({
  type: DELETE_WEIGHT_SUCCESS,
  payload: id
})
export const deleteWeightError = err => ({
  type: DELETE_WEIGHT_ERROR,
  payload: err
})
export const deleteWeight = id => dispatch => {
  dispatch({type: DELETE_WEIGHT_LOADING})
  removeWeight(id)
    .then(res => dispatch(deleteWeightSuccess(id)))
    .catch(err => dispatch(deleteWeightError(err)))
}

