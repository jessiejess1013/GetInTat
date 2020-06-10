import styled from "styled-components";

export const BackTo = styled.p`
  margin-top: 80px;
  text-transform: uppercase;
  color: var(--grey);
  a {
    text-decoration: none;
    color: var(--grey);
  }
  &:hover {
    cursor: pointer;
  }
`;

export const MainProfile = styled.div`
  display: flex;
  align-items: center;

  .profile-container {
    width: 20vw;
    height: 22vw;
    margin-top: 5vh;
    padding-left: 1vw;
    background-color: var(--purple);
    border-radius: 0 20px 0 0;
    overflow: hidden;
    position: relative;
    @media only screen and (max-width: 768px) {
      margin-top: 2vh;
      width: 35vw;
      height: 38vw;
    }
    @media only screen and (max-width: 480px) {
      width: 45vw;
      height: 48vw;
    }
    p {
      color: white;
      margin-left: 5%;
    }
    img {
      margin-left: 5%;
      height: 90%;
      width: auto;
    }
  }
  .book-section {
    width: 50vw;
    margin-left: 10%;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    button {
      border-radius: 10px;
      border: 2px solid var(--green);
      background-color: var(--green);
      width: 6rem;
      height: 3rem;
      font-size: 1.5rem;
      &:hover {
        background-color: white;
        cursor: pointer;
      }
    }
    .info-section {
      margin-top: 10px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      p {
        color: var(--lightgrey);
        padding-right: 5vw;
      }
      span {
        color: black;
        font-size: 2rem;
      }
    }
    .bio {
      margin: 0;
    }
    @media only screen and (max-width: 768px) {
      button {
        margin-top: 15px;
      }
      .info-section {
        flex-direction: column;
        p {
          margin-bottom: 0;
        }
        span {
          font-size: 1.5rem;
        }
        svg {
          width: 3rem;
        }
      }
      .bio {
        display: none;
      }
    }
    @media only screen and (max-width: 480px) {
      button {
        display: none;
      }
    }
  }
`;

export const Mobile = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    button {
      display: none;
    }
  }
  @media only screen and (max-width: 480px) {
    button {
      display: block;
    }
  }
  button {
    border-radius: 10px;
    border: 2px solid var(--green);
    background-color: var(--green);
    width: 5rem;
    height: 2.5rem;
    font-size: 1rem;
    margin-bottom: 0;
    &:hover {
      background-color: white;
      cursor: pointer;
    }
  }
`;

export const LatestWork = styled.p`
  margin-top: 5vh;
  font-size: 1.5rem;
  text-transform: uppercase;
  @media only screen and (max-width: 768px) {
    margin-top: 3vh;
  }
`;

export const Portfolio = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25vw, 1fr));
  grid-gap: 3%;
  object-fit: cover;
  margin-bottom: 15vh;
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(26vw, 1fr));
  }
  @media only screen and (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(40vw, 1fr));
    #mobile-container {
      display: none;
    }
  }
  .container {
    width: 25vw;
    height: 25vw;
    position: relative;
    overflow: hidden;
    @media only screen and (max-width: 768px) {
      width: 26vw;
      height: 26vw;
    }
    @media only screen and (max-width: 480px) {
      width: 40vw;
      height: 40vw;
    }
    img {
      position: absolute;
      left: 50%;
      top: 50%;
      width: auto;
      height: 100%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
    .portrait {
      width: 100%;
      height: auto;
    }
    .overlay {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--purple);
      z-index: 1;
      opacity: 0;
    }
    &:hover .overlay {
      opacity: 0.8;
      transition-duration: 0.5s;
    }
    .tattoo-name {
      color: white;
      position: absolute;
      top: 20%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 2.5vw;
      font-family: "Sprat Web Regular";
    }
    .image-category {
      color: white;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      font-size: 1vw;
      span {
        text-transform: uppercase;
        font-size: 1.2vw;
      }
    }
  }
`;
