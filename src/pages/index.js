import React, { Component } from 'react';
import styled from 'styled-components';

import Quote from '../../src/components/home/Quote';
import News from '../../src/components/home/News';

class indexPage extends Component {
  constructor(props) {
    super();
    const { acf } = props.data.allWordpressPage.edges[0].node;
    this.state = {
      ...acf,
    };
  }

  render() {
    return (
      <Container>
        <Wrapper>
          {this.state.news && <Quote />}
          {this.state.quote && <News />}
        </Wrapper>
      </Container>
    );
  }
}

export default indexPage;

const Container = styled.section`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 90%;
  max-width: 1130px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap-reverse;
`;

export const query = graphql`
  query getHomeData {
    allWordpressPage(filter: { slug: { eq: "home" } }) {
      edges {
        node {
          acf {
            quote
            news
          }
        }
      }
    }
  }
`;
