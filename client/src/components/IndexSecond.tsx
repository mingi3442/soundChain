import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Aos from "aos";
import { theme } from "../theme";

function IndexSecond() {
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
      delay: 30,
      duration: 1500,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <Container data-aos="zoom-out" component="section" sx={{ display: "flex", flexDirection: "column", alignItems: "center", my: 25 }}>
      <Button
        sx={{
          border: "4px solid currentColor",
          borderRadius: 0,
          height: "auto",
          py: 2,
          px: 5,
        }}
      >
        <Typography variant="h4" component="span">
          Got any questions? Need help?
        </Typography>
      </Button>
      <Typography variant="subtitle1" sx={{ my: 3 }}>
        We are here to help. Get in touch!
      </Typography>
    </Container>
  );
}

export default IndexSecond;
