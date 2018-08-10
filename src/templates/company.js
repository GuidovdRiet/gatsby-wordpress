import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';

class Company extends Component {
  render() {
    const company = this.props.data.allWordpressWpCompany.edges[0].node;
    return (
      <div>
        <h1>{ReactHtmlParser(company.title)}</h1>
        <h3>{company.post_meta_fields.city}</h3>
      </div>
    );
  }
}

export default Company;

export const query = graphql`
  query singleCompany($slug: String!) {
    allWordpressWpCompany(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          id
          title
          slug
          post_meta_fields {
            covers
            address
            street
            nr
            city
            website
          }
        }
      }
    }
  }
`;
