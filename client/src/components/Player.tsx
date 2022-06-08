import { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export interface IProp {
  musicTracks: MusicProps[];
}

export interface MusicProps {
  image: string;
  name: string;
  src: string;
}

export default function Player({ musicTracks }: IProp) {
  const [trackIndex, setTrackIndex] = useState(0);
  console.log(trackIndex);

  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) => (currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1));
  };

  const handleClickNext = () => {
    setTrackIndex((currentTrack) => (currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0));
  };

  return (
    <AudioPlayer
      // style={{ width: "300px" }}
      //   style={{ backgroundColor: "rgba(0,0,0,0)", border: "0px solid rgba(0,0,0,0)" }}
      // autoPlay
      // layout="horizontal"
      src={musicTracks[trackIndex].src}
      onPlay={(e) => console.log("onPlay")}
      showSkipControls={true}
      showJumpControls={false}
      //   header={`Now playing: ${musicTracks[trackIndex].name}`}
      //   footer="All music from: www.bensound.com"
      onClickPrevious={handleClickPrevious}
      onClickNext={handleClickNext}
      onEnded={handleClickNext}
      // other props here
    />
  );
}
