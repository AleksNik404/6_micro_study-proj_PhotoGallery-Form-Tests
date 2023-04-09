import styled from '@emotion/styled';
import { BiCommentError } from 'react-icons/bi';
import { RiEmotionSadFill } from 'react-icons/ri';
import { SkeletonContainer } from './SkeletonContainer';
import { css, keyframes } from '@emotion/react';

type MessageProps = {
  error: boolean;
  loading: boolean;
  notEmpty: number;
  children: React.ReactNode;
};

const MessageWrapper = ({ error, loading, notEmpty, children }: MessageProps): JSX.Element => {
  if (error)
    return (
      <ErrorMessage>
        Oops, something went wrong. Please try again later or reach out to the developer for help
        <BiCommentError size={'2rem'} />
      </ErrorMessage>
    );

  if (loading) return <SkeletonContainer />;

  if (!loading && !notEmpty)
    return (
      <NoDataMessage>
        Oops, it looks like we couldn`t find any photos that match your search query{' '}
        <RiEmotionSadFill size={'2rem'} />
      </NoDataMessage>
    );

  return <>{children}</>;
};

export default MessageWrapper;

const delayMessage = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const sameMessageStyles = css`
  height: 200px;
  text-align: center;

  display: flex;
  gap: 1rem;
  place-content: center;
  place-items: center;

  animation: ${delayMessage} 2s 0.5s backwards;
`;

const NoDataMessage = styled.p`
  ${sameMessageStyles}
`;

const ErrorMessage = styled.p`
  ${sameMessageStyles}
`;
