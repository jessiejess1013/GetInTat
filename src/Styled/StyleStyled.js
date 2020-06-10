import styled from "styled-components";

export const StyleSection = styled.section`
  display: flex;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 300;
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
        font-weight: 300;
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
    font-family: Helvetica, Arial, sans-serif;
    font-weight: 500;
    position: absolute;
    right: 5%;
    bottom: -5%;
  }
  @media only screen and (max-width: 768px) {
    .style-list {
      margin-bottom: 25vh;
      p {
        margin-top: 0;
        margin-right: 10px;
      }
    }
    svg {
      width: 40%;
      height: 40%;
      margin-top: 40px;
      margin-left: 0;
      z-index: 1;
    }
    .style-description {
      width: 84vw;
      margin-left: 0;
      margin-top: 380px;
      display: block;
      p {
        padding: 1rem 3rem;
      }
    }
    @media only screen and (max-width: 480px) {
      .style-list {
        margin-bottom: 40vh;
        p {
          line-height: 0.8;
        }
      }
      svg {
        margin-top: -20px;
      }
      .style-description {
        width: 90vw;
        margin-left: 0;
        margin-top: 200px;
        p {
          padding: 1rem 3rem;
        }
      }
    }
  }
`;
