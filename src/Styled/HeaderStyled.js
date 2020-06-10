import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  background-color: white;
  border-bottom: 2px solid var(--purple);
  svg {
    margin-left: 10vw;
  }
  form {
    position: relative;
    background: none;
    img {
      width: 25px;
    }
    input {
      border: none;
      border-bottom: 1px solid black;
      background: none;
    }
  }
  p {
    text-transform: uppercase;
    margin-right: 10vw;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  @media only screen and (max-width: 768px) {
    svg {
      margin-left: 8vw;
      width: 70%;
    }
    p {
      margin-right: 8vw;
    }
  }
  @media only screen and (max-width: 480px) {
    width: 100vw;
    svg {
      margin-left: 5vw;
      width: 50%;
    }
    form {
      display: none;
    }
    p {
      margin-right: 5vw;
    }
  }
`;

export const LoginModal = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  overflow: auto;
  background-color: white;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
  input {
    width: 250px;
    height: 40px;
    border: 1px solid var(--purple);
    margin-bottom: 5px;
  }
  .password {
    color: var(--green);
    text-align: end;
    margin-bottom: 50px;
    text-decoration: underline;
    margin-top: 0;
  }
  button {
    color: white;
    background-color: var(--purple);
    border-radius: 0;
    border: 1px solid var(--purple);
    width: 100px;
    height: 50px;
    font-size: 1.5rem;
    &:hover {
      color: var(--purple);
      background-color: white;
    }
  }
  .create-profile {
    font-size: 1.5rem;
    text-transform: uppercase;
    cursor: pointer;
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
  .close-button {
    font-size: 5rem;
    position: absolute;
    flex: none;
    right: 100px;
    top: -20px;
    &:hover {
      cursor: pointer;
    }
  }
`;
