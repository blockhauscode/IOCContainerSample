import rest from "./rest.mjs"

const RestService = container => {
    const constants = container.constants
    const { url } = constants
    return rest(url)
}

export default RestService