import web3 from "./web3"
import CampaignFactory from "./build/CampaignFactory.json"

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x90A75a9FB724EFc7d5B75816869DF601545e30DB"
)

export default instance
