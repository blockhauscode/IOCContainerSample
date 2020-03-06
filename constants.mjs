const constants = () => {
    return {
        key: process.env.GEOCODER_KEY || "sample-geocoder-key",
        baseURL: process.env.BASE_URL || "localhost"
    }
}

export default constants