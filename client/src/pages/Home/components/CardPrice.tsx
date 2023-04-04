import styled from '@emotion/styled';
import { formatPrice, subtractPercentage } from '../../../utils/priceUtils';

interface PriceProps {
  price: number;
  discountPercentage?: number;
}

const CardPrice = ({ price, discountPercentage = 0 }: PriceProps) => {
  const countedPrice = discountPercentage ? subtractPercentage(price, discountPercentage) : price;

  return (
    <PriceBlock>
      {discountPercentage > 0 && (
        <>
          <Discount>-{discountPercentage}%</Discount>
          <OldPrice>{formatPrice(price)}</OldPrice>
        </>
      )}

      <Price>{formatPrice(countedPrice)}</Price>
    </PriceBlock>
  );
};

const PriceBlock = styled.div`
  display: flex;
  place-items: center;
  gap: 6px;
`;

const Discount = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: white;

  padding: 4px 10px;
  border-radius: 5px;

  background-color: var(--secondary-color-500);
`;

const OldPrice = styled.span`
  font-size: 0.75rem;
  text-decoration: line-through;
  opacity: 0.5;
`;

const Price = styled.span`
  margin-left: auto;

  font-weight: 600;
  letter-spacing: 0.5px;
`;

export default CardPrice;
