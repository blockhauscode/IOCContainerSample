class Geocoder {
    constructor(key, rest) {
        this.key = key
        this.rest = rest
    }

    resolve = async (query) => {
        const url = `https://eu1.locationiq.com/v1/search.php?key=${this.key}&q=${query}&format=json`

        try {
            const response = await this.rest(url)
            if (!response.ok) {
                throw "Unable to decode address"
            }

            const result = JSON.parse(response._bodyText)

            return result[0]
        } catch (error) {
            console.warn(error)
        }
    }
}

export default Geocoder
