import React, { useState, useContext, useEffect } from "react";
import { Context } from "../Context";

import WeddingSingersPage from "./WeddingSingersPage";
import PopMusic from "./PopMusic";
import BlackPanthers from "./BlackPanthers";
import OpeningScreen from "./OpeningScreen";
import RecordStore from "./RecordStore";
import Reverse from "../components/Reverse";
import OldStation from "./OldStation";
import Table from "../components/Table";
import Burned from "./Burned";
import Caesarea from "../components/Caesarea";
import ViktoryMainstream from "./ViktoryMainstream";
import MusicAudioPlayer from "../components/MusicAudioPlayer";
import ModalVideo from "../components/ModalVideo";
import getCurrentMusic from "../utils/currentMusic";
import Disco from "../components/Disco";
import Logo from "../components/Logo";
import TimeLine from "../components/TimeLine";
import BackBeginning from "../components/BackBeginning";
import VideoFrom1976 from "./VideoFrom1976";
import Footer from "../components/Footer";

const Landing = () => {
  const { state } = useContext(Context);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isShowVideo, setIsShowVideo] = useState(false);
  const [isJerusalemVideo, setIsJerusalemVideo] = useState(false);
  const [srcVideo, setSrcVideo] = useState(null);
  const [audio] = useState(new Audio());

  audio.autoplay = true;
  // audio.controls = true

  useEffect(() => {
    if (state.music?.musicPlaying) {
      audio.src = getCurrentMusic(state.music?.musicPlaying);
    }

    // return () =>
    //   document.body.addEventListener("mousemove", function () {
    //     audio.play();
    //   });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.music?.musicPlaying]);

  useEffect(() => {
    if (isShowVideo === true) {
      audio.pause();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpenModal]);

  const openModal = (src) => {
    setIsOpenModal(true);
    setSrcVideo(src);
  };

  const closeModal = () => setIsOpenModal(false);

  const MuteMusic = (value) => {
    console.log("value", value);

    if (value) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  return (
    <>
      {/* 1,2,3 */}
      <OpeningScreen openModal={openModal} closeModal={closeModal} />
      {/* 4,5 */}
      <RecordStore />
      {/* 6 */}
      <Table />
      {/* 7,8,9,10 */}
      <BlackPanthers
        isShow={isJerusalemVideo}
        setIsShow={setIsJerusalemVideo}
        endNextSectionVideo={setIsShowVideo}
      />
      <VideoFrom1976
        isShowVideo={isShowVideo}
        setIsShowVideo={setIsShowVideo}
        setIsJerusalemVideo={setIsJerusalemVideo}
      />
      {/* 11 */}
      <Reverse stopPrevVideo={setIsShowVideo} />
      {/* 12 */}
      <OldStation />
      {/* 13,14,15,16 */}
      <WeddingSingersPage />
      {/* 17,18 */}
      <PopMusic />
      <Disco />
      {/* 19 */}
      <Burned />
      {/* 20 */}
      <Caesarea />
      {/* 21 */}
      <ViktoryMainstream />
      <BackBeginning />
      <Footer />
      <Logo />
      <ModalVideo
        audio={audio}
        isOpen={isOpenModal}
        src={srcVideo}
        closeModal={closeModal}
      />
      <MusicAudioPlayer MuteMusic={MuteMusic} />
      <TimeLine />
    </>
  );
};

export default Landing;
