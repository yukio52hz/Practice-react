import { apiKey } from './settings'

const fromApiResponseToGifs = apiResponse => {
    const { data = [] } = apiResponse
    return data
}

const getTrendingTerms = () => {
    const apiURL = `https://api.giphy.com/v1/trending/searches?api_key=${apiKey}`

    return fetch(apiURL, )
        .then(res => res.json())
        .then(fromApiResponseToGifs)
};
export default getTrendingTerms;