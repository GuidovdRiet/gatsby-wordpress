import React, { Component } from 'react';
import styled from 'styled-components';

class News extends Component {
  render() {
    return (
      <Card>
        <h1>News item</h1>
      </Card>
    );
  }
}

const Card = styled.div`
  background: #DE4863;
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

export default News;
