import styled from "styled-components";

export const StyleSection = styled.section`
  display: flex;
  .style-list {
    &:hover {
      color: var(--lightgrey);
    }
    p {
      margin-top: 5px;
      &:hover {
        cursor: pointer;
        color: black;
        font-style: italic;
      }
    }
  }
  svg {
    width: 25vw;
    max-width: 350px;
    height: auto;
    margin-left: 0;
    margin-top: 20px;
    position: absolute;
    z-index: 1;
  }
  .style-description {
    width: 40%;
    margin-left: 40%;
    margin-top: 10px;
    color: black;
    text-transform: none;
    background-color: var(--lightgrey);
    position: absolute;
    p {
      font-size: 1rem;
      padding: 1rem 3rem 1rem 5rem;
    }
  }
  .view-artists {
    text-transform: uppercase;
    color: var(--purple);
    font-weight: 500;
    font-size: 1.5rem;
    position: absolute;
    right: 5%;
    top: 95%;
  }
  @media only screen and (max-width: 768px) {
    .style-list {
      width: 80vw;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-size: 1.5rem;
      margin-bottom: 20vh;
      p {
        margin-top: 0;
      }
    }
    svg {
      width: 30%;
      height: 30%;
      margin-top: 40px;
      margin-left: -85vw;
      z-index: 1;
    }
    .style-description {
      width: 80%;
      margin-left: 0;
      margin-top: 50px;
      display: block;
      p {
        padding: 1rem 3rem 1rem 13rem;
      }
    }
    @media only screen and (max-width: 480px) {
      .style-list {
        width: 90vw;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        margin-bottom: 40vh;
        p {
          margin-right: 10px;
        }
      }
      svg {
        display: none;
      }
      .style-description {
        margin-left: 10%;
        margin-top: 80px;
        p {
          padding: 1rem 3rem;
        }
      }
    }
  }
`;
