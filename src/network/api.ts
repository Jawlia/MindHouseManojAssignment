import {ApisauceInstance, create} from 'apisauce';
import {ApiConfig, DEFAULT_API_CONFIG} from './api-config';
import * as Types from './api.types';
import { getSearchResults } from "./api-methods/get-search-results";

export interface OAuthTokens {
  oAuthIdToken: string;
  oAuthRefreshToken: string;
  expiresIn: number;
  tokenType: string;
  expiresAt: number;
}
/**
 * Manages all requests to the API.
 */
export class Api {
  /**
   * The underlying apisauce instance which performs the requests.
   */
  private apisauce: ApisauceInstance;

  get apiSauceInstance(): ApisauceInstance {
    return this.apisauce;
  }

  /**
   * Configurable options.
   */
  config: ApiConfig;

  /**
   * Creates the api.
   *
   * @param config The configuration to use.
   */

  public constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config;
    this.apisauce = create({
      baseURL: config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: 'application/json'
      },
    });
  }

  /**
   * Sets up the API.  This will be called during the boot up
   * sequence and will happen before the first React component
   * is mounted.
   *
   * Be as quick as possible in here.
   */
  setup() {
    // construct the apisauce instance
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: 'application/json',
        'X-AccessToken': '',
      },
    });
  }

  /**
   * Gets a single user by ID
   */

  async getSearchResults(searchText: string): Promise<Types.GetSearchResult> {
    return getSearchResults(this, searchText);
  }
}
