import defaultConfig from "~/defaultconfig.js"
export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    const bucket = event.context.cloudflare.env.SPEEDOMETER_CONFIGS;

    let config = await bucket.get("config/"+id)
    if (config === null) {
        return defaultConfig
    }


    return JSON.parse(await config.text())
})