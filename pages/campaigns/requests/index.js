import React, { Component } from "react"
import { Button } from "semantic-ui-react"
import Layout from "../../../components/Layout"
import { Link } from "../../../routes"
import Campaign from "../../../ethereum/campaign"

class RequestIndex extends Component {
  static async getInitialProps(props) {
    const { address } = props.query
    const campaign = new Campaign(address)
    const requestCount = await campaign.methods.getRequestCount().call()

    const requests = await Promise.all(
      Array(requestCount)
        .fill()
        .map((element, index) => {
          return campaign.methods.requests(index).call()
        })
    )

    return { address, requests, requestCount }
  }

  render() {
    return (
      <Layout>
        <h3>Requests</h3>
        <Link route={`/campaigns/${this.props.address}/requests/new`}>
          <a>
            <Button primary>Add Request</Button>
          </a>
        </Link>
      </Layout>
    )
  }
}

export default RequestIndex
