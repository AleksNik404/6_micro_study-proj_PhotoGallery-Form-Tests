import styled from '@emotion/styled';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { formatDate } from '../utils/utils';
import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { TEST_DATA_CARD } from '../test/Api/handlers';

export interface CardItem {
  id: string;
  image: string;
  name: string;

  developer?: string;
  releaseDate?: string;
}

export type CardItemProps = {
  cardData: CardItem;
};

const Card = ({ cardData }: CardItemProps) => {
  const [loading, setLoading] = useState(true);

  const { image, name, releaseDate = 'soon' } = cardData;

  return (
    <GridItem data-testid={TEST_DATA_CARD}>
      <div className="image-box">
        {loading && <Skeleton className="image" />}

        <img
          className="image"
          src={image}
          alt={name}
          onLoad={() => setLoading(false)}
          hidden={loading}
        />

        <AiOutlinePlusCircle className="add-icon" />
      </div>
      <div className="text-box">
        <div>
          <p className="maker">{formatDate(releaseDate)}</p>
          <h1 className="name">{name}</h1>
        </div>
      </div>
    </GridItem>
  );
};

export const GridItem = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.4em;

  overflow: hidden;
  border-radius: var(--border-radius-sm);
  background-color: #18181b;
  transition: all 0.2s;

  perspective: 1000px;

  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 10px;
  }

  .image-box {
    overflow: hidden;
    position: relative;
    transition: all 0.5s;

    line-height: 0;
    padding-bottom: calc(2 / 2.2 * 100%);

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      transition: all 0.3s;
    }

    &:hover::after {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .image {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    object-fit: cover;
    position: absolute;

    transform: scale(1.2);
    transition: all 30s;
  }

  &:hover .image {
    transform: scale(1);
    transition: transform 20s cubic-bezier(0.13, 0.92, 0.21, 0.99);
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

  &:hover .add-icon {
    opacity: 1;
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
