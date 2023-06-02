import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Grid = styled.div<{ type?: 'flex' | 'grid' }>`
  ${({ type = 'grid' }) => {
    return type === 'flex'
      ? css`
          display: flex;
          justify-content: center;
          flex-wrap: wrap;

          & > * {
            max-width: 28rem;
            flex: 1 1 22rem;
          }
        `
      : css`
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));

          & > * {
            max-width: 28rem;
            width: 100%;
          }
        `;
  }}

  justify-items: center;
  gap: 3rem 1.6rem;
`;
