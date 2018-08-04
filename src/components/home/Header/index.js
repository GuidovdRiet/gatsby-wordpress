import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Title>Company name</Title>
        <Link to="/page-2/">Go to page 2</Link>
      </Wrapper>
    )
  }
}

export default Header;

const Wrapper = styled.div`
  background: #E34A63;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 40px;
  & > a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    &:hover {
      color: white;
    }
  }
`;

const Title = styled.h1`
  margin: 0;
`;