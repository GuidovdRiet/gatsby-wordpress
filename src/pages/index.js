import React, { Component } from 'react';

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
      <div>
        {this.state.news && <Quote />}
        {this.state.quote && <News />}
      </div>
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
          }
        }
      }
    }
  }
`;
