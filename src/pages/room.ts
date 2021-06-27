import styled from 'styled-components';

export const Container = styled.div`
  header {
    padding: 2.4rem 16rem;
    border-bottom: 1px solid #e2e2e2;

    @media (max-width: 768px) {
      padding: 2.4rem 8rem;
    }

    @media (max-width: 425px) {
      padding: 2.4rem 6rem;
    }

    @media (max-width: 355px) {
      padding: 2.4rem 4rem;
    }

    .content {
      max-width: 112rem;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      > img {
        max-height: 4.5rem;
      }

      > div {
        display: flex;
        gap: 1.6rem;

        .button{
          @media (max-width: 425px) {
            height: 4rem;
            padding: 0 2rem;
          }
        }

        button {
          height: 4rem;
        }
      }
    }
  }

  main {
    max-width: 112rem;
    margin: 0 auto;
    padding: 0 16rem;

    @media (max-width: 768px) {
      padding: 0 8rem;
    }

    @media (max-width: 425px) {
      padding: 0 6rem;
    }

    @media (max-width: 355px) {
      padding: 2.4rem 4rem;
    }

    form {
      textarea {
        width: 100%;
        border: 0;
        padding: 1.6rem;
        border-radius: 0.8rem;
        background: #fefefe;
        box-shadow: 0 0.2rem 1.2rem rgba(0, 0, 0, 0.04);
        resize: vertical;
        min-height: 13rem;
      }
    }

    .questions-list {
      margin: 3.2rem 0 2.4rem 0;

      button svg {
        width: 2.4rem;
        height: 2.4rem;
      }
    }
  }
`;

export const RoomTitle = styled.div`
  margin: 3.2rem 0 2.4rem;
  display: flex;
  align-items: center;

  @media (max-width: 425px) {
    flex-direction: column;
    gap: 1rem;
  }

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 2.4rem;
    color: #29292e;
  }

  span {
    margin-left: 1.6rem;
    background: #e559f9;
    border-radius: 9999px;
    padding: 0.8rem 1.6rem;
    color: #fff;
    font-weight: 500;
    font-size: 1.4rem;
  }
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.6rem;

  @media (max-width: 425px) {
    flex-direction: column;
    gap: 1rem;
  }

  .user-info {
    display: flex;
    align-items: center;

    img {
      width: 3.2rem;
      height: 3.2rem;
      border-radius: 50%;
    }

    > span {
      margin-left: 0.8rem;
      color: #29292e;
      font-weight: 500;
      font-size: 1.4rem;
    }
  }

  span {
    font-size: 1.4rem;
    color: #737380;
    font-weight: 500;

    button {
      background: transparent;
      border: 0;
      color: #835afd;
      text-decoration: underline;
      font-size: 1.4rem;
      font-weight: 500;
      cursor: pointer;
    }
  }

  .button{
    @media (max-width: 425px) {
      height: 4rem;
      padding: 0 2rem;
    }
  }
`;

