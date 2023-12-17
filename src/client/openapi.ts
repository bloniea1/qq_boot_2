import { createOpenAPI } from "qq-guild-bot"
import { bootConfig } from "../config.js"
export const client = createOpenAPI(bootConfig)
