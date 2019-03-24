import name from './name.js'
import app from './app.js'
import url from './url.js'

const config = Object.assign(
    app,
    url,
    name
)

export default config;