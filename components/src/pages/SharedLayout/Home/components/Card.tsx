import React, { Component } from 'react';
import styled from '@emotion/styled';
import { AiOutlinePlusCircle } from 'react-icons/ai';

import CardPrice from './CardPrice';

type Props = {
  data: {
    image: string;
    name: string;
    price: number;
    developer: string;
    discountPercentage: number;
  };
};

class Card extends Component<Props> {
  render() {
    const { image, name, price, developer, discountPercentage } = this.props.data;

    return (
      <StyledCard>
        <div className="image-box">
          <img className="image" src={image} alt={name} />
          <AiOutlinePlusCircle className="add-icon" />
        </div>
        <div className="text-box">
          <div>
            <p className="maker">{developer}</p>
            <h1 className="name">{name}</h1>
          </div>

          <CardPrice price={price} discountPercentage={discountPercentage} />
        </div>
      </StyledCard>
    );
  }
}

const StyledCard = styled.article`
  max-width: 16rem;

  position: relative;
  overflow: hidden;

  display: grid;
  grid-template-rows: max-content;
  gap: 0.5em;

  &:hover .add-icon {
    opacity: 1;
  }

  cursor: pointer;

  .image-box {
    /* width: 100%; */
    overflow: hidden;
    position: relative;
    transition: all 0.5s;

    &::after {
      content: '';
      position: absolute;
      inset: 0;

      background-color: rgba(255, 255, 255, 0);
      border-radius: 0.3em;
      transition: all 0.3s;
    }

    &:hover::after {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  .add-icon {
    width: 1.3em;
    height: 1.3em;

    position: absolute;
    z-index: 2;
    right: 0.7em;
    top: 0.7em;

    color: var(--secondary-color-1000);

    transition: all 0.3s;
    opacity: 0;
  }

  .image {
    object-fit: cover;
    width: 100%;
    /* max-height: 100%; */

    border-radius: 0.3em;
  }

  .text-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    gap: 20px;
  }

  .maker {
    font-size: 0.7rem;
    opacity: 0.7;
  }

  .name {
    font-size: 1rem;
  }
`;

export default Card;
