import styled from '@emotion/styled';
import { AiOutlinePlusCircle } from 'react-icons/ai';

import CardPrice from './CardPrice';

export interface CardItem {
  id: string;
  image: string;
  name: string;
  price: number;
  discountPercentage: number;

  developer?: string;
  releaseDate?: string;
}

export type CardItemProps = {
  cardData: CardItem;
};

const Card = ({ cardData }: CardItemProps) => {
  const { image, name, price, developer, discountPercentage, releaseDate = 'soon' } = cardData;

  return (
    <GridItem>
      <div className="image-box">
        <img className="image" src={image} alt={name} />
        <AiOutlinePlusCircle className="add-icon" />
      </div>
      <div className="text-box">
        <div>
          <p className="maker">{developer || releaseDate}</p>
          <h1 className="name">{name}</h1>
        </div>

        <CardPrice price={price} discountPercentage={discountPercentage} />
      </div>
    </GridItem>
  );
};

export const GridItem = styled.article`
  /* for Grid container */
  /* max-width: 15rem; */
  /* width: 100%; */

  /* for Flex container */
  max-width: 450px;
  flex: 1 1 330px;

  /* other */
  display: flex;
  flex-direction: column;
  gap: 0.4em;

  overflow: hidden;
  border-radius: 4px;
  background-color: #18181b;
  transition: all 0.2s;

  &:hover .add-icon {
    opacity: 1;
  }

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 10px;
  }

  cursor: pointer;

  .image-box {
    overflow: hidden;
    position: relative;
    transition: all 0.5s;

    padding-bottom: calc(2 / 3 * 100%);

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
      background-color: rgba(0, 0, 0, 0.15);
    }
  }

  .image {
    top: 0;
    left: 0;
    width: 100%;

    height: 100%;
    object-fit: cover;
    position: absolute;
  }

  .add-icon {
    width: 1.3em;
    height: 1.3em;

    position: absolute;
    right: 0.7em;
    top: 0.7em;
    z-index: 2;

    color: var(--secondary-color-1000);
    opacity: 0;
    transition: all 0.3s;
  }

  .text-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    gap: 30px;
    height: 100%;
    padding: 0px 8px 10px;
  }

  .maker {
    opacity: 0.7;
    font-size: calc(0.6rem + 0.1vw);
  }

  .name {
    font-size: calc(0.75rem + 0.2vw);
    overflow-wrap: break-word;
  }
`;

export default Card;
