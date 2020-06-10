import styled from "styled-components";

export const StyledMain = styled.main`
  margin: 10vh 10vw;
  @media only screen and (max-width: 768px) {
    margin: 10vh 8vw;
  }
  @media only screen and (max-width: 480px) {
    margin: 10vh 5vw;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  font-size: 3rem;
  p {
    font-size: 1rem;
    text-transform: none;
    color: var(--grey);
    margin-bottom: 5px;
  }
  label {
    line-height: 1.5;
    display: inline-block;
    position: relative;
    input {
      position: absolute;
      visibility: hidden;
      &:checked ~ .checkmark:after {
        display: block;
      }
    }
    .checkmark {
      position: absolute;
      left: 0;
      top: 1rem;
      height: 2.5rem;
      width: 2.5rem;
      cursor: pointer;
      border: 1px solid black;
      &:after {
        content: "x";
        font-weight: 100;
        font-size: 2.5rem;
        left: 0.5rem;
        top: -0.6rem;
        position: absolute;
        display: none;
      }
    }
    .radio-choice {
      margin-left: 3.5rem;
    }
  }
`;

export const FilterList = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25vw, 1fr));
  grid-gap: 3%;
  object-fit: cover;
  margin-top: 5vh;
  margin-bottom: 15vh;
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(26vw, 1fr));
  }
  @media only screen and (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(40vw, 1fr));
    #mobile-container {
      display: none;
    }
  }
`;

export const ProfileContainer = styled.div`
  width: 25vw;
  float: left;
  padding-bottom: 35vw;
  height: 0;
  padding-left: 1vw;
  background-color: var(--purple);
  border-radius: 0 20px 0 0;
  overflow: hidden;
  position: relative;
  @media only screen and (max-width: 768px) {
    padding-bottom: 40vw;
  }
  @media only screen and (max-width: 480px) {
    width: 40vw;
    padding-bottom: 65vw;
  }
  p {
    color: white;
    margin-left: 5%;
    text-transform: uppercase;
  }
  img {
    margin-left: 5%;
    height: auto;
    width: 95%;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
    p {
      margin-left: 5%;
      text-transform: uppercase;
      font-size: 1.2rem;
      &:hover {
        cursor: pointer;
      }
      a {
        text-decoration: none;
        color: white;
        position: relative;
        &:before {
          content: "";
          position: absolute;
          width: 100%;
          height: 1px;
          bottom: 0;
          right: 0;
          background-color: white;
          visibility: visible;
          transition: all 0.3s ease-in-out;
        }
        &:hover:before {
          visibility: hidden;
          width: 0;
        }
      }
    }
  }
  button {
    border-radius: 20px;
    border: 2px solid black;
    background-color: var(--green);
    width: 7rem;
    height: 3rem;
    font-size: 1.2rem;
    margin-right: 5px;
    text-transform: uppercase;
    &:hover {
      background-color: white;
      cursor: pointer;
    }
  }
  @media only screen and (max-width: 768px) {
    div {
      margin-top: 2px;
      p {
        font-size: 1rem;
      }
    }
    button {
      font-size: 1rem;
      width: 5rem;
      height: 2rem;
    }
  }
`;

export const TattooContainer = styled(ProfileContainer)`
  padding-top: 2vw;
  padding-bottom: 33vw;
  border-radius: 20px 0 0 0;
  @media only screen and (max-width: 768px) {
    padding-bottom: 35vw;
  }
  @media only screen and (max-width: 480px) {
    padding-bottom: 60vw;
  }
  .container {
    width: 25vw;
    height: 25vw;
    position: relative;
    overflow: hidden;
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
  }
`;
