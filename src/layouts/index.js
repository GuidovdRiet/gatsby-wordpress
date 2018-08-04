import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';

injectGlobal`
  ${styledNormalize}

  body {
    padding: 0;
  }
`

const Layout = ({ children }) => (
  <div>
    <Helmet
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div>{children()}</div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout;
