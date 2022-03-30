import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InputAdornment from "@mui/material/InputAdornment";
import { useForm, Controller } from "react-hook-form";

import useStyles from "./styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 550,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
  overflow: "auto"
};

export default function HeaderModal({ open, handleClose }) {
  const classes = useStyles();
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      headline: "",
      location: "",
      linkedin: "",
      facebook: "",
      twitter: "",
      website: ""
    }
  });

  const onSubmit = data => {
    console.log(data);
    handleClose();
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <form>
            <Box sx={style} component="form">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    style={{ fontWeight: "600" }}
                    component="div"
                    textAlign="center"
                  >
                    Personal information
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    control={control}
                    rules={{
                      maxLength: 100,
                      required: true
                    }}
                    render={({ field }) => (
                      <TextField
                        required
                        fullWidth
                        label="First Name"
                        {...field}
                      />
                    )}
                    name="firstName"
                  />
                  {errors.firstName && (
                    <p className={classes.error}>This field is required.</p>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    control={control}
                    rules={{
                      maxLength: 100,
                      required: true
                    }}
                    render={({ field }) => (
                      <TextField
                        required
                        fullWidth
                        label="Last Name"
                        {...field}
                      />
                    )}
                    name="lastName"
                  />
                  {errors.lastName && (
                    <p className={classes.error}>This field is required.</p>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    control={control}
                    rules={{
                      maxLength: 100,
                      required: true
                    }}
                    render={({ field }) => (
                      <TextField
                        required
                        fullWidth
                        label="Phone number"
                        {...field}
                      />
                    )}
                    name="phone"
                  />
                  {errors.phone && (
                    <p className={classes.error}>This field is required.</p>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    control={control}
                    rules={{
                      maxLength: 100,
                      required: true
                    }}
                    render={({ field }) => (
                      <TextField
                        required
                        fullWidth
                        label="Email Address"
                        {...field}
                      />
                    )}
                    name="email"
                  />
                  {errors.email && (
                    <p className={classes.error}>This field is required.</p>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    control={control}
                    rules={{
                      maxLength: 100,
                      required: true
                    }}
                    render={({ field }) => (
                      <TextField
                        required
                        fullWidth
                        label="Headline"
                        {...field}
                      />
                    )}
                    name="headline"
                  />
                  {errors.headline && (
                    <p className={classes.error}>This field is required.</p>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    control={control}
                    rules={{
                      maxLength: 100,
                      required: true
                    }}
                    render={({ field }) => (
                      <TextField
                        required
                        fullWidth
                        label="Location"
                        {...field}
                      />
                    )}
                    name="location"
                  />
                  {errors.location && (
                    <p className={classes.error}>This field is required.</p>
                  )}
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Typography gutterBottom variant="h6" component="div">
                    Social links
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    control={control}
                    render={({ field }) => (
                      <TextField
                        required
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <LinkedInIcon />
                            </InputAdornment>
                          )
                        }}
                        fullWidth
                        placeholder="Your Linkedin Profile"
                        {...field}
                      />
                    )}
                    name="linkedin"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    control={control}
                    render={({ field }) => (
                      <TextField
                        required
                        fullWidth
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <FacebookIcon />
                            </InputAdornment>
                          )
                        }}
                        placeholder="Your Facebook Profile"
                        {...field}
                      />
                    )}
                    name="facebook"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    control={control}
                    render={({ field }) => (
                      <TextField
                        required
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <TwitterIcon />
                            </InputAdornment>
                          )
                        }}
                        fullWidth
                        placeholder="Your Twitter Profile"
                        {...field}
                      />
                    )}
                    name="twitter"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    control={control}
                    render={({ field }) => (
                      <TextField
                        required
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <LanguageIcon />
                            </InputAdornment>
                          )
                        }}
                        fullWidth
                        placeholder="Your Website"
                        {...field}
                      />
                    )}
                    name="website"
                  />
                </Grid>
                <Grid container justifyContent="center">
                  <Grid item sx={{ mb: 2, mt: 3 }}>
                    <Button
                      sx={{ borderRadius: 10 }}
                      variant="outlined"
                      onClick={handleClose}
                    >
                      Cancel
                    </Button>
                    <Button
                      sx={{ borderRadius: 10, marginLeft: 3 }}
                      variant="contained"
                      onClick={handleSubmit(onSubmit)}
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </form>
        </Fade>
      </Modal>
    </div>
  );
}
