import jikan from './clients/jikan'
import {request} from './helpers/request'

export const getAnime = async () => {
    const data = await request(jikan, `/top/anime`);
    return data.data;
};