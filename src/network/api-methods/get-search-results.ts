import {Api} from '../api';
import {ApiResponse} from 'apisauce';
import * as Types from '../api.types';
import * as ApiConstants from '../api-constants';
import {getGeneralApiProblem} from '../api-problem';
import {SEARCH_URL} from '../../utils';

export async function getSearchResults(
  api: Api,
  searchText: string,
): Promise<Types.GetSearchResult> {
  // make the api call
  const response: ApiResponse<any> = await api.apiSauceInstance.get(
    `${SEARCH_URL}${searchText}`,
  );

  // the typical ways to die when calling an api
  if (!response.ok) {
    const problem = getGeneralApiProblem(response);
    if (problem) return problem;
  }

  const convertDeviceTypes = (raw: {
    artistId: number;
    collectionId: number;
    trackId: string;
    artistName: string;
    collectionName: string;
    artworkUrl100: string;
    collectionViewUrl: string;
    trackPrice: string;
    releaseDate: string;
    currency: string;
  }) => {
    return {
      ...raw,
    };
  };

  try {
    const rawDeviceTypes = response.data.results;
    const resultDeviceTypes: Types.GetSearchResult[] = rawDeviceTypes.map(
      convertDeviceTypes,
    );
    return {kind: ApiConstants.API_OK, results: resultDeviceTypes};
  } catch {
    return {kind: ApiConstants.API_ERROR_BAD_DATA};
  }
}
