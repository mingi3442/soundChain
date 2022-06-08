import { Box, Typography } from "@mui/material";
import { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
  position: fixed;
  width: 100%;
  height: 80px;
  bottom: 0;
  font-size: 14px;
  padding: 0 40px;
  color: white;
`;
const CoverImage = styled("div")({
  width: 55,
  height: 55,
  objectFit: "cover",
  overflow: "hidden",
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: "rgba(0,0,0,0.08)",
  "& > img": {
    width: "100%",
  },
});

export interface IProp {
  musicTracks: MusicProps[];
}

export interface MusicProps {
  image: string;
  name: string;
  src: string;
}

export default function MusicAOD() {
  const MusicProps = [
    {
      image: "https://images.unsplash.com/photo-1653637828875-015f907b665a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      name: "Memories",
      src: "https://www.bensound.com/bensound-music/bensound-memories.mp3",
    },
    {
      image: "https://images.unsplash.com/photo-1653637828875-015f907b665a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      name: "Creative Minds",
      src: "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3",
    },
    {
      image: "https://images.unsplash.com/photo-1653637828875-015f907b665a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      name: "Acoustic Breeze",
      src: "https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3",
    },
    {
      image: "https://images.unsplash.com/photo-1653637828875-015f907b665a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      name: "Sunny",
      src: "https://www.bensound.com/bensound-music/bensound-sunny.mp3",
    },
    {
      image: "https://images.unsplash.com/photo-1653637828875-015f907b665a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      name: "Tenderness",
      src: "https://www.bensound.com/bensound-music/bensound-tenderness.mp3",
    },
    {
      image: "https://images.unsplash.com/photo-1653637828875-015f907b665a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      name: "Once Again",
      src: "https://www.bensound.com/bensound-music/bensound-onceagain.mp3",
    },
    {
      image: "https://images.unsplash.com/photo-1653637828875-015f907b665a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      name: "Sweet",
      src: "https://www.bensound.com/bensound-music/bensound-sweet.mp3",
    },
    {
      image: "https://images.unsplash.com/photo-1653637828875-015f907b665a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      name: "Love",
      src: "https://www.bensound.com/bensound-music/bensound-love.mp3",
    },
    {
      image: "https://images.unsplash.com/photo-1653637828875-015f907b665a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      name: "Piano Moment",
      src: "https://www.bensound.com/bensound-music/bensound-pianomoment.mp3",
    },
    {
      image: "https://images.unsplash.com/photo-1653637828875-015f907b665a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      name: "E.R.F",
      src: "https://www.bensound.com/bensound-music/bensound-erf.mp3",
    },
    {
      image: "https://images.unsplash.com/photo-1653637828875-015f907b665a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      name: "Dreams",
      src: "https://www.bensound.com/bensound-music/bensound-dreams.mp3",
    },
    {
      image: "https://images.unsplash.com/photo-1653637828875-015f907b665a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      name: "A Day To Remember",
      src: "https://www.bensound.com/royalty-free-music/track/a-day-to-remember-wedding-music",
    },
    {
      image: "https://images.unsplash.com/photo-1653637828875-015f907b665a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      name: "Adventure",
      src: "https://www.bensound.com/bensound-music/bensound-adventure.mp3",
    },
    {
      image: "https://images.unsplash.com/photo-1653637828875-015f907b665a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      name: "Photo Album",
      src: "https://www.bensound.com/bensound-music/bensound-photoalbum.mp3",
    },
    {
      image: "https://images.unsplash.com/photo-1653637828875-015f907b665a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      name: "November",
      src: "https://www.bensound.com/bensound-music/bensound-november.mp3",
    },
  ];
  const [trackIndex, setTrackIndex] = useState(0);

  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) => (currentTrack === 0 ? MusicProps.length - 1 : currentTrack - 1));
  };

  const handleClickNext = () => {
    setTrackIndex((currentTrack) => (currentTrack < MusicProps.length - 1 ? currentTrack + 1 : 0));
  };

  return (
    <Nav>
      <Box sx={{ display: "flex", alignItems: "center", flexDirection: "row", width: "40%" }}>
        <CoverImage>
          <img alt={MusicProps[0].name} src={MusicProps[0].image} />
        </CoverImage>
        <Typography variant="caption" color="text.secondary" fontWeight={500}>
          Jun Pulse
        </Typography>
        <Box sx={{ display: "flex", ml: 1.5, minWidth: 0, flexDirection: "row" }}>
          <Typography noWrap letterSpacing={-0.25}>
            {MusicProps[0].name}
          </Typography>
        </Box>
      </Box>
      <AudioPlayer
        // style={{ width: "300px" }}
        autoPlay
        layout="horizontal"
        src={MusicProps[trackIndex].src}
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
    </Nav>
  );
}
