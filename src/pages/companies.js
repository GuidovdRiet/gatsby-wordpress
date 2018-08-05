import React, { Component } from 'react';
import styled from 'styled-components';

import CompanyCard from '../components/home/Companies/CompanyCard';

class Companies extends Component {
  renderCompanies() {
    const { edges } = this.props.data.allWordpressWpCompany;
    const companies = edges;
    return companies.map(company => (
      <CompanyCard key={company.node.id} company={company.node} />
    ));
  }

  render() {
    return (
      <Container>
        <CompanyCardsWrapper>{this.renderCompanies()}</CompanyCardsWrapper>
      </Container>
    );
  }
}

export default Companies;

const Container = styled.section`
  display: flex;
  justify-content: center;
`;

const CompanyCardsWrapper = styled.div`
  width: 90%;
  max-width: 1130px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap-reverse;
`;

export const query = graphql`
  query AllCompanies {
    allWordpressWpCompany {
      edges {
        node {
          id
          title
          slug
          post_meta_fields {
            covers
            address
          }
        }
      }
    }
  }
`;
