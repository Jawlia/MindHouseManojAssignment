import {ApiResponse} from 'apisauce';
import * as ApiConstants from './api-constants';

export type GeneralApiProblem =
  /**
   * Times up.
   */
  | {kind: ApiConstants.API_ERROR_TYPE_TIMEOUT; temporary: true}
  /**
   * Cannot connect to the server for some reason.
   */
  | {kind: ApiConstants.API_ERROR_TYPE_CANNOT_CONNECT; temporary: true}
  /**
   * The server experienced a problem. Any 5xx error.
   */
  | {kind: ApiConstants.API_ERROR_TYPE_SERVER}
  /**
   * We're not allowed because we haven't identified ourself. This is 401.
   */
  | {kind: ApiConstants.API_ERROR_TYPE_UNAUTHORIZED}
  /**
   * We don't have access to perform that request. This is 403.
   */
  | {kind: ApiConstants.API_ERROR_TYPE_FORBIDDEN}
  /**
   * Unable to find that resource.  This is a 404.
   */
  | {kind: ApiConstants.API_ERROR_TYPE_NOT_FOUND}
  /**
   * All other 4xx series errors.
   */
  | {kind: ApiConstants.API_ERROR_TYPE_REJECTED}
  /**
   * Something truly unexpected happened. Most likely can try again. This is a catch all.
   */
  | {kind: ApiConstants.API_ERROR_TYPE_UNKNOWN; temporary: true}
  /**
   * The data we received is not in the expected format.
   */
  | {kind: ApiConstants.API_ERROR_TYPE_BAD_DATA}
  /**
   * The data we received is not in the expected format.
   */
  | {kind: ApiConstants.API_ERROR_TYPE_DUPLICATE_RESOURCE}
  /**
   * The hub is not online
   */
  | {kind: ApiConstants.API_ERROR_TYPE_HUB_NOT_ONLINE}
  /**
   * Request data missing/insufficient
   */
  | {kind: ApiConstants.API_ERROR_TYPE_FAULTY_REQUEST_DATA};

/**
 * Attempts to get a common cause of problems from an api response.
 *
 * @param response The api response.
 */
export function getGeneralApiProblem(
  response: ApiResponse<any>,
): GeneralApiProblem {
  switch (response.problem) {
    case 'CONNECTION_ERROR':
      return {kind: ApiConstants.API_ERROR_CANNOT_CONNECT, temporary: true};
    case 'NETWORK_ERROR':
      return {kind: ApiConstants.API_ERROR_CANNOT_CONNECT, temporary: true};
    case 'TIMEOUT_ERROR':
      return {kind: ApiConstants.API_ERROR_TIMEOUT, temporary: true};
    case 'SERVER_ERROR':
      return {kind: ApiConstants.API_ERROR_SERVER};
    case 'UNKNOWN_ERROR':
      return {kind: ApiConstants.API_ERROR_UNKNOWN, temporary: true};
    case 'CLIENT_ERROR':
      switch (response.status) {
        case 400:
          return {kind: ApiConstants.API_ERROR_FAULTY_REQUEST_DATA};
        case 401:
          return {kind: ApiConstants.API_ERROR_UNAUTHORIZED};
        case 403:
          return {kind: ApiConstants.API_ERROR_FORBIDDEN};
        case 409:
          return {kind: ApiConstants.API_ERROR_DUPLICATE_RESOURCE};
        case 404:
          return {kind: ApiConstants.API_ERROR_NOT_FOUND};
        default:
          return {kind: ApiConstants.API_ERROR_REJECTED};
      }
    case 'CANCEL_ERROR':
      return {kind: ApiConstants.API_ERROR_NOT_FOUND};
  }
  return {kind: ApiConstants.API_ERROR_NOT_FOUND};
}
