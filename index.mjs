import container from "./iocContainer.mjs"

const geocoder = container.geocoder
const constants = container.constants
const rest = container.rest

console.log(rest)
console.log(geocoder.rest)
console.log(rest === geocoder.rest)