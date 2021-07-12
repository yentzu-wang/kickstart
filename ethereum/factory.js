import web3 from "./web3"
import CampaignFactory from "./build/CampaignFactory.json"

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x8d23Ee4424CE9a2bD751C612C93F582031af429b"
)

export default instance
