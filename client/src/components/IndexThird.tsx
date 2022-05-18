import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button, Typography } from "@mui/material";
import { theme } from "../theme";

function IndexThird() {
  React.useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 100,
      delay: 30,
      duration: 1500,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <Container component="section" sx={{ mt: 20, mb: 20, display: "flex" }}>
      <Grid container>
        <Grid data-aos="fade-right" item xs={12} md={6} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              bgcolor: theme.textColor,
              color: theme.bgColor,
              py: 8,
              px: 3,
            }}
          >
            <Box component="form" sx={{ maxWidth: 400 }}>
              <Typography variant="h2" component="h2" gutterBottom sx={{ mt: 2, mb: 4 }}>
                You can Buy Song NFTs
              </Typography>
              <Typography variant="h5">Support your Favorite Singer & Own thier Song</Typography>

              <Button type="submit" color="primary" variant="contained" sx={{ width: "100%", mt: 5, mb: 3 }}>
                Explore
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid data-aos="fade-left" item xs={12} md={6} sx={{ display: { md: "block", xs: "none" }, position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              top: -67,
              left: -67,
              right: 0,
              bottom: 0,
              width: "100%",
              background: "url(/static/themes/onepirate/productCTAImageDots.png)",
            }}
          />
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="call to action"
            sx={{
              position: "absolute",
              top: -28,
              left: -28,
              right: 0,
              bottom: 0,
              width: "100%",
              maxWidth: 600,
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default IndexThird;
