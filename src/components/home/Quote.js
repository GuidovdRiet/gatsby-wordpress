import React, { Component } from 'react';
import styled from 'styled-components';

class Quote extends Component {
  render() {
    return(
      <Card>
        <h1>Quote</h1>
      </Card>
    )
  }
}

const Card = styled.div`
  background: #34A99B;
  background-size: cover;
  flex-grow: 1;
  min-width: 25%;
  height: 400px;
  margin: 10px;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    transform: scale(1.01);
    cursor: pointer;
  }
  & > h1 {
    color: #fff;
    margin: 0;
  }
`;  

export default Quote;