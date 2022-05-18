import * as React from "react";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { theme } from "../theme";
import Aos from "aos";

const item: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

function IndexFourth() {
  React.useEffect(() => {
    Aos.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 300,
      delay: 20,
      duration: 1200,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <Box component="section" sx={{ display: "flex", overflow: "hidden", bgcolor: theme.whiteColor }}>
      <Container sx={{ mt: 20, mb: 30, display: "flex", position: "relative" }}>
        <Box component="img" src="/static/themes/onepirate/productCurvyLines.png" alt="curvy lines" sx={{ pointerEvents: "none", position: "absolute", top: -180 }} />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box data-aos="fade-up" sx={item}>
              <Box component="img" src="/listen.png" alt="suitcase" sx={{ height: 55 }} />
              <Typography variant="h6" sx={{ my: 5 }}>
                New experiences
              </Typography>
              <Typography variant="h5">You'll be able to experience a differentiated service from other streaming services</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box data-aos="fade-up" sx={item}>
              <Box component="img" src="/play.png" alt="graph" sx={{ height: 55 }} />
              <Typography variant="h6" sx={{ my: 5 }}>
                Play to the best song
              </Typography>
              <Typography variant="h5">You can even experience their special music that hasn't been officially released</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box data-aos="fade-up" sx={item}>
              <Box component="img" src="/paper.png" alt="clock" sx={{ height: 55 }} />
              <Typography variant="h6" sx={{ my: 5 }}>
                Buy a song through nft
              </Typography>
              <Typography variant="h5">Buy the nft of a song to own a song and feel the special experience of supporting your favorite singer!</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default IndexFourth;
