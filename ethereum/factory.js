import web3 from "./web3"
import CampaignFactory from "./build/CampaignFactory.json"

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xfB541ED4Ef795dADB8D22e84BA149389Aa47DE0d"
)

export default instance
