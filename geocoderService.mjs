import Geocoder from "./geocoder.mjs"

const geocoderService = container => {
    const rest = container.rest
    const { key } = container.constants
    return new Geocoder(key, rest)
}

export default geocoderService
