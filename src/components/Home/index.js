import Header from "../Header/Header";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import AppBar from "../AppBar/AppBar";
import { styled } from "@mui/material/styles";
import AboutMe from "../AboutMe";
import Projects from "../Projects";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  marginBottom: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

export default function Home() {
  return (
    <>
      <AppBar />
      <Box
        sx={{
          margin: "18px 40px",
          flexGrow: 1
        }}
      >
        <Header />
        <Box
          sx={{
            margin: "10px 0px",
            flexGrow: 1
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Item>Left Side</Item>
            </Grid>
            <Grid item xs={8}>
              <Item>
                <AboutMe />
              </Item>
              <Item>
                <Projects />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
