import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import React, { Component } from 'react';

import favicon from '../components/global/Images/favicon.png';
import 'bootstrap/dist/css/bootstrap.min.css';
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
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
          ]}
        />
        <Header
          styling={this.props.data.allWordpressWpThemeStyling.edges[0].node.acf}
          menuItems={
            this.props.data.allWordpressWpApiMenusMenusItems.edges[0].node.items
          }
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
    allWordpressWpApiMenusMenusItems {
      edges {
        node {
          items {
            object_slug
            title
            url
          }
        }
      }
    }
  }
`;
