import geocoderService from "./geocoderService.mjs"
import restService from "./restService.mjs"
import constantService from "./constantsService.mjs"

export const STRATEGY_CACHED = "cached"
export const STRATEGY_NEW = "new"

export class IOCContainer {
    constructor() {
        this.services = {}
        this.instances = {}
        this.strategies = {}
    }

    put = (name, service, strategy = STRATEGY_CACHED) => {
        if (this.services[name]) {
            throw `Service ${name} already exists`
        }
        this.services[name] = service
        this.instances[name] = null
        this.strategies[name] = strategy

        Object.defineProperty(this, name, {
            get() {
                return this._get(name)
            }
        })
    }

    _get = name => {
        let instance = this.instances[name]
        const service = this.services[name]

        if (!service) {
            throw "No service found"
        }

        if (this.strategies[name] === STRATEGY_NEW) {
            return service(this)
        }

        if (!instance) {
            instance = service(this)
            this.instances[name] = instance
        }

        return instance
    }
}

const container = new IOCContainer()

container.put("constants", constantService)
container.put("rest", restService)
container.put("geocoder", geocoderService)

export default container
