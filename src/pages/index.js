import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';

import Quote from '../../src/components/home/Quote';
import News from '../../src/components/home/News';
import { log } from 'util';

class indexPage extends Component {
  constructor(props) {
    super();
    const { acf } = props.data.allWordpressPage.edges[0].node;
    this.state = {
      ...acf,
    };
  }

  calculateColumns(columns) {
    const colSize = 12 / parseInt(columns);
    console.log(colSize);
    return colSize;
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs="12" md={`${this.calculateColumns(this.state.home_news_columns)}`}>
            {this.state.news && <News />}
          </Col>
          <Col xs="12" md={`${this.calculateColumns(this.state.home_quote_columns)}`}>
            {this.state.quote && <Quote />}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default indexPage;

export const query = graphql`
  query getHomeData {
    allWordpressPage(filter: { slug: { eq: "home" } }) {
      edges {
        node {
          acf {
            quote
            news
            home_quote_columns
            home_news_columns
          }
        }
      }
    }
  }
`;
