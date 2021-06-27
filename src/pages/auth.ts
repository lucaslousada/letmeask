import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  @media (max-width: 700px) {
    flex-direction: column;
    height: auto;
  }

  aside {
    flex: 7;

    background: #835afd;
    color: #fff;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 12rem 8rem;

    @media (max-width: 700px) {
      flex: 0 1 auto;
      height: 100vh;
    }

    @media (max-width: 320px) {
      padding: 10rem 6rem;
    }

    img {
      max-width: 30rem;
    }

    strong {
      font: 700 3.6rem "Poppins", sans-serif;
      line-height: 4.2rem;
      margin-top: 1.6rem;
    }

    p {
      font-size: 2.4rem;
      line-height: 3.2rem;
      margin-top: 1.6rem;
      color: #f8f8f8;
    }
  }

  main {
    flex: 8;

    padding: 0 8rem;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 700px) {
      flex: 0 1 auto;
      height: 100vh;
    }

    @media (max-width: 320px) {
      padding: 10rem 6rem;
    }
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 32rem;
  align-items: stretch;
  text-align: center;

  @media (max-width: 768px) {
    max-width: 29rem;
  }

  > img {
    max-width: 15.5rem;
    align-self: center;
  }

  button img {
    max-width: 2.4rem;
  }

  h2 {
    font-size: 2.4rem;
    margin: 6.4rem 0 2.4rem;
    font-family: "Poppins", sans-serif;
  }

  form {
    input {
      height: 5rem;
      border-radius: 0.8rem;
      padding: 0 1.6rem;
      background: #fff;
      border: 1px solid #a8a8b3;
    }

    button {
      margin-top: 1.6rem;
    }

    button,
    input {
      width: 100%;
    }
  }

  p {
    font-size: 1.4rem;
    color: #737380;
    margin-top: 1.6rem;

    a {
      color: #e559f9;
    }
  }
`;

export const CreateRoom = styled.button`
  margin-top: 6.4rem;
  height: 5rem;
  border-radius: 0.8rem;
  font-weight: 500;
  background: #ea4335;
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

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Separator = styled.div`
  font-size: 1.4rem;
  color: #a8a8b3;

  margin: 3.2rem 0;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    flex: 1;
    height: 1px;
    background: #a8a8b3;
    margin-right: 1.6rem;
  }

  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: #a8a8b3;
    margin-left: 1.6rem;
  }
`;