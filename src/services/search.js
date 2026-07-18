import tmdb from "./clients/tmdb";
import { request } from "./helpers/request";

export const getSearchTMDB = async (searchType, query) => {
    const data = await request(tmdb,`/search/${searchType}`, {
      params: {
        query
      },
    });
    return data.results;
}