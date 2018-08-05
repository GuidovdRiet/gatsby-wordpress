import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import React, { Component } from 'react';

import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';

import Header from '../components/home/Header';
import Footer from '../components/home/Footer';

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
        <Header styling={this.props.data.wordpressWpThemeStyling.acf} />
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
  query themeStyling {
    wordpressWpThemeStyling {
      acf {
        background
        logo {
          source_url
        }
      }
    }
  }
`;
