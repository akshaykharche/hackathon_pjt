import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EditIcon from "@mui/icons-material/Edit";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import HeaderModal from "./HeaderModal";
import useStyles from "./styles";
// import mypic from "../images/pic.jpg";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const clasess = useStyles();
  const [pickedImage, setPickedImage] = useState("");
  const [personalData, setPersonalData] = useState({
    name: "Santraj Kumar",
    title: "Senior Software Engineer at Credit Suisse",
    location: "Pune, India",
    email: "santrajmaurya1992@gmail.com",
    phone: "+91 9901429441"
  });

  const handlePersonalinfo = () => {
    setIsModalOpen(true);
  };

  const Input = styled("input")({
    display: "none"
  });

  const handleOnChange = event => {
    const newImage = event.target?.files?.[0];
    if (newImage) {
      setPickedImage(URL.createObjectURL(newImage));
    }
  };

  return (
    <Paper
      sx={{
        padding: "0px 20px 20px 20px",
        margin: "auto",
        flexGrow: 1,
        backgroundColor: "#E2E6EE"
      }}
    >
      {isModalOpen && (
        <HeaderModal
          open={isModalOpen}
          handleClose={() => setIsModalOpen(false)}
        />
      )}
      <Grid container spacing={2}>
        <Grid item>
          <EditIcon className={clasess.edit} onClick={handlePersonalinfo} />
        </Grid>
        <Grid>
          <Card
            sx={{
              borderRadius: 69,
              height: 135,
              width: 135,
              textAlign: "center"
            }}
          >
            <label htmlFor="icon-button-file">
              <Input
                accept="image/*"
                id="icon-button-file"
                type="file"
                onChange={handleOnChange}
              />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                size="large"
                sx={{ fontSize: 80 }}
                src={pickedImage}
              ></IconButton>
            </label>
            <CardMedia
              component="img"
              margin="auto"
              display="block"
              maxWidth="100%"
              maxHeight="100%"
              // image={mypic}
            />
          </Card>
        </Grid>

        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography
                gutterBottom
                variant="h6"
                style={{ fontWeight: "600" }}
                component="div"
                name="name"
              >
                {personalData.name}
              </Typography>
              <Typography variant="body2" name="title" gutterBottom>
                {personalData.title}
              </Typography>
              <Typography
                variant="body2"
                name="location"
                color="textSecondary"
                gutterBottom
                style={{ fontWeight: "600" }}
              >
                <Chip
                  className={clasess.chip}
                  name="location"
                  label={personalData.location}
                />
              </Typography>
              <Stack direction="row" alignItems="center" gap={1}>
                <EmailIcon fontSize="small" color="primary" />
                <Link
                  href="mailto: santrajmaurya1992@gmail.com"
                  underline="hover"
                >
                  <Typography variant="body1" color="primary" name="email">
                    {personalData.email}
                  </Typography>
                </Link>
                <LocalPhoneIcon fontSize="small" color="primary" />
                <Link href="tel: +91 9901429441" underline="hover">
                  <Typography variant="body1" name="phone">
                    {personalData.phone}
                  </Typography>
                </Link>
              </Stack>
            </Grid>
          </Grid>
          <Grid item>
            <Tooltip title="LinkedIn Profile">
              <IconButton>
                <LinkedInIcon
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/santraj-kumar-67b43611b/",
                      "_blank"
                    )
                  }
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="Website">
              <IconButton>
                <LanguageIcon
                  onClick={() =>
                    window.open(
                      "https://santrajmaurya.github.io/portfolio/#/home",
                      "_blank"
                    )
                  }
                />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Header;
