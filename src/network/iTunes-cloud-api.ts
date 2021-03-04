import * as Types from './api.types';
import {Api} from './api';
import {ApiConfig, DEFAULT_API_CONFIG} from './api-config';

class ITunesCloudApi {
  private api: Api;

  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    config = config;
    this.api = new Api(config);
  }

  public async getSearchResults(
    searchText: string,
  ): Promise<Types.GetSearchResult> {
    return this.api.getSearchResults(searchText);
  }
}

export {ITunesCloudApi};
