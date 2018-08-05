import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

class Header extends Component {
  render() {
    return (
      <Wrapper background={this.props.styling.background}>
        <Title>Company name</Title>
        <Link to="/companies/">Companies</Link>
      </Wrapper>
    );
  }
}

export default Header;

const Wrapper = styled.div`
  background: ${props => props.background};
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