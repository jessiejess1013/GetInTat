import styled from "styled-components";
import { keyframes } from "styled-components";

export const Intro = styled.h1`
  display: inline-block;
  padding-top: 10vh;
  width: 60vw;
  max-width: 42rem;
  font-size: 3rem;
  font-family: "Sprat Web Black";
  margin-left: 10vw;
  @media only screen and (max-width: 768px) {
    width: 80vw;
    margin-left: 8vw;
  }
  @media only screen and (max-width: 480px) {
    width: 90vw;
    margin-left: 5vw;
  }
`;

export const Section = styled.p`
  font-size: 2.5rem;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 300;
  margin-left: 10vw;
  text-transform: uppercase;
  margin-top: 5vh;
  .icons {
    width: 2rem;
    margin-left: 20px;
  }
  @media only screen and (max-width: 768px) {
    margin-left: 8vw;
  }
  @media only screen and (max-width: 480px) {
    margin-left: 5vw;
    font-size: 2rem;
    .icons {
      width: 1.5rem;
    }
  }
`;

const ArrowAnimation = keyframes`
  0%,
  100% {
    transform: translate(0, 0);
  }
  60% {
    transform: translate(10rem, 0);
  }
`;

const CrossAnimation = keyframes`
  0%,
  100% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(360deg);
  }
`;

export const NavArtist = styled(Section)`
  a {
    text-decoration: none;
    color: black;
  }
  &:hover {
    cursor: pointer;
    .icons {
      animation: ${ArrowAnimation} 2s ease-in-out infinite;
    }
  }
`;

export const NavStyle = styled(Section)`
  margin-bottom: 15vh;
  &:hover {
    cursor: pointer;
    .icons {
      animation: ${CrossAnimation} 3s ease-in-out;
    }
  }
`;

export const StyledFooter = styled.footer`
  width: 100%;
  background-color: var(--lightgrey);
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  div {
    text-transform: uppercase;
    line-height: 1;
    margin-left: 10vw;
    margin-bottom: 15px;
    a {
      cursor: pointer;
      text-decoration: none;
      color: black;
      position: relative;
      &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        bottom: 0;
        right: 0;
        background-color: black;
        visibility: visible;
        transition: all 0.3s ease-in-out;
      }
      &:hover:before {
        visibility: hidden;
        width: 0;
      }
    }
    p {
      display: flex;
      justify-content: space-between;
      #mobile-terms {
        display: none;
      }
    }
  }
  form {
    margin-right: 10vw;
    input {
      border: none;
      border-bottom: 1px solid black;
      background: none;
    }
  }
  @media only screen and (max-width: 768px) {
    margin-top: 10vh;
    div {
      margin-left: 8vw;
    }
    form {
      margin-right: 8vw;
    }
  }
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    div {
      margin-left: 5vw;
      #terms {
        display: none;
      }
      p {
        width: 90vw;
        margin-bottom: 0;
        flex-direction: row;
        justify-content: space-between;
        #mobile-terms {
          display: inline-flex;
        }
      }
    }
    form {
      margin: 0 0 10px 5vw;
    }
  }
`;
