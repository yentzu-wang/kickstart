import React, { Component } from "react"
import { Button, Table } from "semantic-ui-react"
import Layout from "../../../components/Layout"
import { Link } from "../../../routes"
import Campaign from "../../../ethereum/campaign"

class RequestIndex extends Component {
  static async getInitialProps(props) {
    const { address } = props.query
    const campaign = new Campaign(address)
    const requestCount = await campaign.methods.getRequestCount().call()

    const requests = await Promise.all(
      Array(parseInt(requestCount))
        .fill()
        .map((element, index) => {
          return campaign.methods.requests(index).call()
        })
    )

    return { address, requests, requestCount }
  }

  render() {
    const { Header, Row, HeaderCell, Body } = Table

    return (
      <Layout>
        <h3>Requests</h3>
        <Link route={`/campaigns/${this.props.address}/requests/new`}>
          <a>
            <Button primary>Add Request</Button>
          </a>
        </Link>
        <Table>
          <Header>
            <Row>
              <HeaderCell>ID</HeaderCell>
              <HeaderCell>Description</HeaderCell>
              <HeaderCell>Amount</HeaderCell>
              <HeaderCell>Recipient</HeaderCell>
              <HeaderCell>Approval Count</HeaderCell>
              <HeaderCell>Approval</HeaderCell>
              <HeaderCell>Finalize</HeaderCell>
            </Row>
          </Header>
        </Table>
      </Layout>
    )
  }
}

export default RequestIndex
