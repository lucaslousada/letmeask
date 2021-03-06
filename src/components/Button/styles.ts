import styled from 'styled-components';

export const TagButton = styled.button`
  height: 5rem;
  border-radius: 0.8rem;
  font-weight: 500;
  padding: 0 3.2rem;
  background: #835afd;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  img {
    margin-right: 0.8rem;
  }

  &.outlined{
    background: #fff;
    border: 1px solid #835afd;
    color: #835afd;
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled{
    opacity: 0.6;
    cursor: not-allowed;
  }
`;