import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import { TextField, Typography } from "@mui/material";
import { theme } from "../theme";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

function Copyright() {
  return (
    <React.Fragment>
      {"© "}
      <Link color="inherit" href="/">
        SoundChain
      </Link>{" "}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.bgColor,
  mr: 1,
  "&:hover": {
    bgcolor: theme.whiteColor,
  },
};

const LANGUAGES = [
  {
    code: "en-US",
    name: "English",
  },
  {
    code: "fr-FR",
    name: "Français",
  },
];

export default function Footer() {
  return (
    <Typography component="footer" sx={{ display: "flex", bgcolor: "#E9E6E1" }}>
      <Container sx={{ my: 8, display: "flex", mb: 10 }}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid container direction="column" justifyContent="flex-end" spacing={2} sx={{ height: 120 }}>
              <Grid item sx={{ display: "flex" }}>
                <Box component="a" href="https://github.com/mingi3442/soundChain" sx={iconStyle}>
                  {/* <img src="/github.png" alt="github" /> */}
                  <GitHubIcon />
                </Box>
                <Box component="a" href="/" sx={iconStyle}>
                  {/* <img src="/mail.png" alt="Twitter" /> */}
                  <EmailIcon />
                </Box>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            {/* <Typography variant="h6" gutterBottom>
              Legal
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: "none", p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/premium-themes/onepirate/terms/">Terms</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/premium-themes/onepirate/privacy/">Privacy</Link>
              </Box>
            </Box> */}
          </Grid>
          <Grid item xs={6} sm={8} md={4}>
            <Typography variant="h6" gutterBottom>
              Language
            </Typography>
            <TextField
              select
              size="medium"
              variant="standard"
              SelectProps={{
                native: true,
              }}
              sx={{ mt: 1, width: 150 }}
            >
              {LANGUAGES.map((language) => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item>
            <Typography variant="caption">
              <Link href="https://velog.io/@moment_log" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">
                Producer Blog
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
