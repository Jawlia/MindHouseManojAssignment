import {GeneralApiProblem} from './api-problem';
import * as ApiConstants from './api-constants';

export type GetSearchResult =
  | {kind: ApiConstants.API_TYPE_OK; results: any}
  | GeneralApiProblem;
