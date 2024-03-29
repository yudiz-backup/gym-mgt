import { addQueryParams } from 'helpers'
import Axios from '../../axios'

export function getOrganizationList(query) {
  return Axios.get(`/v1/organization/list/all?${addQueryParams(query)}`)
}

export function getSpecificOrganization(id) {
  return Axios.get(`/v1/organization/${id}`)
}