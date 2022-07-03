import React, { useContext, useState } from "react";
import { Context } from "../../Context";

import speaker from "../../utils/images/png/speaker.png";
import muteIcon from "../../utils/images/png/mute.png";

import { Wrapper, Speaker, MusicName } from "./styled";

const MusicAudioPlayer = (props) => {
  const { state } = useContext(Context);
  const [mute, setMute] = useState(false);

  return (
    <Wrapper>
      {/* <Speaker
        onClick={() => {
          console.log("Speaker Clicked");
        }}
        src={muteIcon}
      /> */}
      {mute ? (
        <Speaker
          onClick={() => {
            setMute(false);
            props.MuteMusic(false);
          }}
          src={muteIcon}
        />
      ) : (
        <Speaker
          onClick={() => {
            setMute(true);
            props.MuteMusic(true);
          }}
          src={speaker}
        />
      )}
      <MusicName>{state.music?.nameMusic}</MusicName>
    </Wrapper>
  );
};

export default MusicAudioPlayer;
