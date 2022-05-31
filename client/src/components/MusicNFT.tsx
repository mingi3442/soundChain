import Player, { MusicProps } from "./Player";
import { styled, useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
const Widget = styled("div")(({ theme }) => ({
  padding: 16,
  borderRadius: 16,
  width: 343,
  maxWidth: "100%",
  margin: "auto",
  marginTop: 300,
  position: "relative",
  zIndex: 1,
  backgroundColor: theme.palette.mode === "dark" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.4)",
  backdropFilter: "blur(40px)",
}));
const CoverImage = styled("div")({
  width: 250,
  height: 250,
  objectFit: "cover",
  overflow: "hidden",
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: "rgba(0,0,0,0.08)",
  "& > img": {
    width: "100%",
  },
});
export default function MusicNFT() {
  const theme = useTheme();
  const MusicProps: MusicProps[] = [
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
  return (
    <Widget>
      <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
        <CoverImage>
          <img alt={MusicProps[0].name} src={MusicProps[0].image} />
        </CoverImage>
        <Typography variant="caption" color="text.secondary" fontWeight={500}>
          Jun Pulse
        </Typography>
        <Box sx={{ display: "flex", ml: 1.5, minWidth: 0 }}>
          <Typography noWrap>
            <b>aaa </b>
          </Typography>
          <Typography noWrap letterSpacing={-0.25}>
            {MusicProps[0].name}
          </Typography>
        </Box>
      </Box>
      <Player musicTracks={MusicProps} />
    </Widget>
  );
}
