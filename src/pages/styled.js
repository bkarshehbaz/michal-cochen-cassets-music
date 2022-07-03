import styled from "styled-components";
import arisSunGif from "../utils/images/png/aris_sun_gif.gif";
import choice_2 from "../utils/images/png/the_choice_2.png";
import choice_3 from "../utils/images/png/the_choice_3.png";
import childrenVolumeGif from "../utils/images/png/children_volume_gif.gif";
import burned_1 from "../utils/images/png/burned_1.png";
import burned_2 from "../utils/images/png/burned_2.png";

export const FoundingFathersPhoto = styled.img`
  width: 75%;
  cursor: pointer;
`;

export const GreekWaveWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 200px 0 0;
`;

export const ArisSunNewspaper = styled.img`
  position: absolute;
  z-index: 2;
  margin-top: 80px;
  left: 4%;
`;

export const ArisSunPhoto = styled.img`
  position: absolute;
  z-index: 1;
  right: 4%;
`;

export const NaturalSelectionWrapper = styled.div`
  margin: 250px 0 0;
  padding: 200px 0 0px 40px;
  background-image: url(${choice_2}), url(${choice_3});
  background-repeat: no-repeat, no-repeat;
  width: 100%;
  height: 100%;
  background-position: 84% 17%, center top;
`;

export const NaturalReactPlayerWrapper = styled.div`
  width: 476px;
  height: 276px;

  div {
    width: 100% !important;
    height: 100% !important;
  }
`;

export const StationTelAviv = styled.img`
  width: 75%;
  margin-left: auto;
  margin-right: auto;
`;

export const PhotoStaticWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StationTelAvivPhoto = styled.img`
  width: 100%;
`;

export const WeddingSingers = styled.img`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

export const ChildrenVolumePhotoWrapper = styled.div`
  background-image: url(${childrenVolumeGif});
  background-repeat: no-repeat;
  background-size: 150%;
  background-position: center;
  width: 100%;
  height: 100%;
`;

export const StyledPageWrapper = styled.div``;

export const StyledSixtiesPhoto = styled.div`
  background-image: url(${arisSunGif});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 180px 10px;
  width: 100%;
  height: 100%;
  margin-top: 30%;
`;

export const EntranceRadioPhoto = styled.img``;

export const BurnedWrapper = styled.div`
  margin: auto;
  margin-top: 300px;
  width: 90%;
  height: 30vw;
  background-image: url(${burned_2});
  background-size: 80% auto;
  background-repeat: no-repeat;
  background-position: center top;
  transition: 0.3s;

  &:hover {
    transition: 0.3s;
    background-image: url(${burned_1});
  }
`;

export const StyledYear = styled.div`
  color: #000000;
  font-family: Cristyle;
  font-size: 92px;
  font-weight: normal;
  line-height: 98.1%;
  letter-spacing: -0.02em;
  text-align: right;
`;

export const StyledTheatherImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledTheatherImage = styled.img`
  width: 140%;
  margin-left: 120px;
  margin-top: 80px;
`;

export const TimeLine = styled.img`
  position: fixed;
  width: auto;
  height: 100vh;
  top: 0;
  right: -20px;
  z-index: 99;
`;
export const CurrentTime = styled.div`
  position: fixed;
  width: 50px;
  height: 8px;
  opacity: 0.75;
  top: 0;
  right: 0;
  z-index: 100;
  background-color: yellow;
`;

export const StyledBurnedText = styled.div`
  width: 520px;
  direction: rtl;
`;

export const StyledRadioText = styled.div`
  width: 545px;
  direction: rtl;
`;

export const StyledRadioUnderText = styled.div`
  margin-top: 10px;
  font-family: crystal;
  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: right;
  direction: rtl;
`;

export const BlockTextWrapper = styled.div`
  width: 525px;
`;

export const TextGreekWaveWrapper = styled.div`
  width: 495px;
`;

export const TextThetarClubWrapper = styled.div`
  width: 530px;
`;

export const TextNaturalSelectionWrapper = styled.div`
  width: 520px;
`;

export const TextStationTelAvivWrapper = styled.div`
  width: 520px;
`;

export const TextWeddingSingersWrapper = styled.div`
  width: 500px;
`;

export const TextChildrenVolumeWrapper = styled.div`
  width: 540px;
`;

export const TextChildrenVolume = styled.div``;
