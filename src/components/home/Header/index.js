import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

class Header extends Component {
  render() {
    return (
      <Wrapper background={this.props.styling.background}>
        <Logo logo={this.props.styling.logo.source_url}/>
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
  padding: 20px 40px;
  margin-bottom: 40px;
  & > a {
    color: rgba(68, 69, 69, 0.6);
    text-decoration: none;
    &:hover {
      color: rgba(68, 69, 69, 1);
    }
  }
`;

const Logo = styled.div`
  background: url(${props => props.logo});
  background-size: contain;
  background-repeat: no-repeat;
  width: 50px;
  height: 50px;
`;