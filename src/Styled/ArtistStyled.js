import styled from "styled-components";

export const Profile = styled.div`
  width: 100%;
  color: white;
  background-color: var(--purple);
`;

export const NameTalent = styled.div`
  margin-left: 10vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: white;
  p {
    width: 40%;
    padding-top: 10px;
    margin-top: 0;
    margin-bottom: 0;
    border-radius: 0 50px 0 0;
    text-transform: uppercase;
    background-color: var(--purple);
  }
  div {
    width: 60%;
    padding: 10px 0 10px 10px;
    margin-top: 0;
    margin-bottom: 0;
    color: var();
  }
  @media only screen and (max-width: 768px) {
    margin-left: 8vw;
    p {
      width: 60%;
    }
    div {
      width: 40%;
    }
  }
  @media only screen and (max-width: 480px) {
    margin-left: 5vw;
  }
`;

export const ArtistProfile = styled.section`
  margin: 0 10vw;
  padding-top: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  div {
    display: flex;
    flex-direction: row;
  }
  .profile {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 1.5rem;
    text-transform: uppercase;
    align-self: flex-end;
    a {
      text-decoration: none;
      color: white;
      position: relative;
      &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
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
  #mobile-profile {
    display: none;
  }
  .bio {
    margin-left: 10%;
    width: 35vw;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-left: 8vw;
    .profile {
      display: none;
    }
    #mobile-profile {
      display: block;
      align-self: center;
      margin-left: 5vw;
    }
    .bio {
      width: 84vw;
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 480px) {
    margin-left: 5vw;
    #mobile-img {
      display: none;
    }
  }
`;

export const Container = styled.div`
  width: 14vw;
  height: 14vw;
  padding: 0 20px 30px 0;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  @media only screen and (max-width: 768px) {
    width: 20vw;
    height: 20vw;
    padding: 0 10px 30px 0;
  }
  @media only screen and (max-width: 480px) {
    width: 40vw;
    height: 40vw;
  }
`;

export const Container1 = styled(Container)`
  width: 22vw;
  height: 22vw;
  img {
    width: 100%;
    height: 100%;
  }
  @media only screen and (max-width: 768px) {
    width: 40vw;
    height: 40vw;
  }
  @media only screen and (max-width: 480px) {
    width: 40vw;
    height: 40vw;
  }
`;
