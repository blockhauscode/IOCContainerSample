const rest = (options = {}) => {
    const baseURL = options.baseURL || ""

    return (path, args) => {
        const base = baseURL
        return fetch(`${base}${path}`, args)
    }
}

export default rest