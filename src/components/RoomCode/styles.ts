import styled from 'styled-components';

export const TagButton = styled.button`
  height: 4rem;
  border-radius: 0.8rem;
  overflow: hidden;
  background: #fff;
  border: 1px solid #835afd;
  cursor: pointer;
  display: flex;

  div {
    background: #835afd;
    height: 100%;
    padding: 0 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
      width: 2.0rem;
      height: 2.0rem;
    }
  }

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 1.6rem 0 1.2rem;
    width: 24rem;
    font-size: 1.4rem;
    font-weight: 500;

    @media (max-width: 700px) {
      display: none;
    }
  }
`;