import axiosClient from "./axiosClient";

export const category = {
    movie : 'movie',
    tv: 'tv'
}

export const movieType = {
    popular: 'popular',
    topRate: 'top_rated',
    upComing:'upcoming'
}

export const tvType = {
    popular: 'popular',
    topRate: 'top_rated',
    onTheAir:'on_the_air'
}

const tmdpApi = {
    getMovieList: (type, params) => {
        const url = "movie" + type;
        return axiosClient.get(url, params)
    },
    getTvList: (type, params) => {
        const url = "tv" + type;
        return axiosClient.get(url, params)
    },
    getVideos: (category, id) => {
        const url = `${category}/${id}/videos`;
        return axiosClient.get(url, {params: {}})
    },
    search: (category, params) => {
        const url = `search/${category}`;
        return axiosClient.get(url, params)
    },
    getCredits: (category,id,params) => {
        const url = `${category}/${id}/credits`;
        return axiosClient.get(url, params)
    },
    getSimilar: (category,id,params) => {
        const url = `${category}/${id}/similar`;
        return axiosClient.get(url, params)
    },
}

export default tmdpApi;