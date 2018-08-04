import React, { Component } from 'react';
import styled from 'styled-components';

import Header from '../components/home/Header';
import Footer from '../components/home/Footer';
import CompanyCard from '../components/home/Companies/CompanyCard';

class indexPage extends Component {
  renderCompanies() {
    const { edges } = this.props.data.allWordpressWpCompany;
    const companies = edges;
    return companies.map(company => (
      <CompanyCard key={company.node.id} company={company.node} />
    ));
  }

  render() {
    return (
      <div>
        <Header />
        <Container>
          <CompanyCardsWrapper>{this.renderCompanies()}</CompanyCardsWrapper>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default indexPage;

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
          post_meta_fields {
            covers
            address
          }
        }
      }
    }
  }
`;
