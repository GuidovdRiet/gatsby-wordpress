import React, { Component } from 'react';

class Company extends Component {
  render() {
    const company = this.props.data.allWordpressWpCompany.edges[0].node;
    return(
      <div>
        <h1>{company.title}</h1>
        <h2>{company.post_meta_fields.city}</h2>
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
