import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import React, { Component } from 'react';

import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';

import Header from '../components/global/Header';
import Footer from '../components/global/Footer';

injectGlobal`
  ${styledNormalize}

  body {
    padding: 0;
  }
`;

class Layout extends Component {
  render() {
    return (
      <div>
        <Helmet
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header
          styling={this.props.data.allWordpressWpThemeStyling.edges[0].node.acf}
        />
        <div>{this.props.children({ ...this.props })}</div>
        <Footer />
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query themeQuery {
    allWordpressWpThemeStyling(filter: { title: { eq: "Header" } }) {
      edges {
        node {
          title
          acf {
            logo
            background
          }
        }
      }
    }
  }
`;
