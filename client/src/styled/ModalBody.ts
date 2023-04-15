import styled from '@emotion/styled';

export const Body = styled.div`
  padding: 10px 20px;
  background-color: #0a0a0ae1;
  display: grid;
  justify-items: space-between;
  align-items: center;
  column-gap: 1rem;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  border-radius: var(--border-radius-sm);

  grid-template-areas:
    'date       description'
    'userName   description'
    '.          description'
    '.          icons';

  .body__date {
    opacity: 0.7;
    font-size: calc(0.6rem + 0.25vw);
  }

  .body__name {
    display: flex;
    align-items: center;
    gap: 5px;

    grid-area: userName;
    font-size: calc(0.6rem + 0.25vw);
  }

  .body__description {
    grid-area: description;
    justify-self: center;
    font-style: italic;
    text-transform: capitalize;

    &::before {
      content: open-quote;
    }
    &::after {
      content: close-quote;
    }
  }

  .body__icons {
    margin-top: 20px;
    grid-area: icons;
    justify-self: end;

    display: flex;

    gap: 1.5rem;
    font-size: 1.2rem;
  }

  .body__icon {
    display: flex;
    gap: 4px;
    place-items: center;
  }

  .icon-views {
    color: var(--secondary-color-800);
  }
`;
