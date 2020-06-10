import React from "react";
import { Link } from "react-router-dom";
import {
  Profile,
  NameTalent,
  ArtistProfile,
  Container,
  Container1,
} from "../Styled/ArtistStyled";

export const artist = {
  profile:
    "https://cdn1.i-scmp.com/sites/default/files/styles/768x768/public/images/methode/2017/11/01/86669cfe-b952-11e7-affb-32c8d8b6484e_1280x720_175128.JPG?itok=nsvOCJ0T",
  imageSrc: [
    "https://tattooplanetmagazine.com/wp-content/uploads/2019/01/Galya-Gisca_01.jpg",
    "https://tattooplanetmagazine.com/wp-content/uploads/2019/01/Galya-Gisca_02.jpg",
    "https://tattooplanetmagazine.com/wp-content/uploads/2019/01/Galya-Gisca_03.jpg",
    "https://tattooplanetmagazine.com/wp-content/uploads/2019/01/Galya-Gisca_04.jpg",
    "https://tattooplanetmagazine.com/wp-content/uploads/2019/01/Galya-Gisca_05.jpg",
    "https://tattooplanetmagazine.com/wp-content/uploads/2019/01/Galya-Gisca_06.jpg",
    "https://tattooplanetmagazine.com/wp-content/uploads/2019/01/Galya-Gisca_09.jpg",
    "https://tattooplanetmagazine.com/wp-content/uploads/2019/01/Galya-Gisca_10.jpg",
    "https://tattooplanetmagazine.com/wp-content/uploads/2019/01/Galya-Gisca_11.jpg",
  ],
  tattooName: [
    "Crab",
    "Scenery",
    "Mountains",
    "Bird",
    "Rose",
    "Diver",
    "Scissors",
    "Ganesha",
    "Mermaid",
  ],
  name: "Artist Name",
  category: "Black & White",
  shortbio:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  longbio:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus dignissim sapien vel ullamcorper.Fusce tempor finibus neque, nec sodales justo maximus ut.Vivamus malesuada ut justo sit amet elementum. Sed id ultrices nulla.Integer consectetur libero massa, vel consectetur lorem imperdiet vel.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Duis id quam dolor.Praesent mollis tellus sed libero pellentesque rutrum.Integer commodo felis non imperdiet interdum.Nulla at libero aliquam, gravida diam eleifend, faucibus mauris.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam non metus ullamcorper, pulvinar ante at, imperdiet est.Duis mauris urna, gravida at dolor non, rhoncus malesuada lacus.",
};

class Artist extends React.Component {
  render() {
    return (
      <Profile>
        <NameTalent>
          <p>{artist.name}</p>
          <div>New Talent</div>
        </NameTalent>
        <ArtistProfile>
          <div>
            <Container1>
              <img src={artist.profile} alt="" />
            </Container1>
            <p className="profile" id="mobile-profile">
              <Link to="/profile">Visit Profile</Link>
            </p>
          </div>
          <section>
            <div>
              <p className="profile">
                <Link to="/profile">Visit Profile</Link>
              </p>
              <p className="bio">
                <strong>Bio</strong> <br />
                {artist.shortbio}
              </p>
            </div>
            <div>
              <Container>
                <img src={artist.imageSrc[0]} alt="" />
              </Container>
              <Container>
                <img src={artist.imageSrc[1]} alt="" />
              </Container>
              <Container id="mobile-img">
                <img src={artist.imageSrc[2]} alt="" />
              </Container>
              <Container id="mobile-img">
                <img src={artist.imageSrc[4]} alt="" />
              </Container>
            </div>
          </section>
        </ArtistProfile>
      </Profile>
    );
  }
}

export default Artist;
