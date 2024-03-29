import { addQueryParams } from 'helpers'
import Axios from '../../axios'

export function getEmployeeList(query) {
  return Axios.get(`/v1/employee/list/all?${addQueryParams(query)}`)
}

export function getEmployeeById(id) {
  return Axios.get(`/v1/employee/${id}`)
}