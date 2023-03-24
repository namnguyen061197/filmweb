const apiConfig = {
    baseUrl: "https://api.themoviedb.org/3",
    apiKey:"ca0bd7ce3c847a07896f890762dd1c01",
    originalImgae: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image : (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`

}

export default apiConfig;