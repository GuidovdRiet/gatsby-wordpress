import React, { Component } from 'react';
import styled from 'styled-components';
import { push } from 'gatsby-link';

class CompanyCard extends Component {
  decodeHTML(html) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }

  render() {
    return (
      <Card
        onClick={() => push(`/bedrijf/${this.props.company.slug}`)}
        background={this.props.company.post_meta_fields.covers[0].split(',')[0]}
      >
        <h1>{this.decodeHTML(this.props.company.title)}</h1>
      </Card>
    );
  }
}

export default CompanyCard;

const Card = styled.div`
  background: url(${props => props.background});
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
