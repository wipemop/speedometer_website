import defaultConfig from "~/defaultconfig.js"
import {readRawBody} from "h3";
export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    const bucket = event.context.cloudflare.env.SPEEDOMETER_CONFIGS;
    const body = await readRawBody(event);

    await bucket.put("config/"+id, JSON.stringify(body))
    return {
        "status": "ok"
    }
})