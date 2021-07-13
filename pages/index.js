import React, { Component } from "react"
import { Card, Button } from "semantic-ui-react"
import Layout from "../components/Layout"
import factory from "../ethereum/factory"

import "semantic-ui-css/semantic.min.css"

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call()

    return { campaigns }
  }

  renderCampaigns() {
    const items = this.props.campaigns.map((address) => {
      return { header: address, description: <a>View Campaign</a>, fluid: true }
    })

    return <Card.Group items={items} />
  }

  render() {
    return (
      <Layout>
        <h3>Open Campaigns</h3>
        {this.renderCampaigns()}
        <Button content="Create Campaign" icon="add circle" primary />
      </Layout>
    )
  }
}

export default CampaignIndex
