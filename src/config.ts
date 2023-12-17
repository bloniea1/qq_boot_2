import "dotenv/config"
export const bootConfig = {
  appID: process.env.APP_ID as string, // 申请机器人时获取到的机器人 BotAppID
  token: process.env.APP_TOKEN as string, // 申请机器人时获取到的机器人 BotToken
  intents: [], // 事件订阅,用于开启可接收的消息类型
  sandbox: false, // 沙箱支持，可选，默认false. v2.7.0+
}
