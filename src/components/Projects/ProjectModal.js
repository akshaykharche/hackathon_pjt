import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
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
  borderRadius: 3
};

export default function ProjectModal({ open, handleClose, onSubmitHandler }) {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const classes = useStyles();

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
            <Box sx={style} component="form" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    style={{ fontWeight: "600" }}
                    component="div"
                    textAlign="center"
                  >
                    Project details
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
                      <TextField required fullWidth label="Title" {...field} />
                    )}
                    name="title"
                  />
                  {errors.title && (
                    <p className={classes.error}>This field is required.</p>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    control={control}
                    render={({ field }) => (
                      <TextField fullWidth label="Location" {...field} />
                    )}
                    name="location"
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Controller
                    control={control}
                    rules={{
                      required: true
                    }}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        required
                        minRows={4}
                        maxRows={4}
                        label="Description"
                        multiline
                        {...field}
                      />
                    )}
                    name="description"
                  />
                  {errors.description && (
                    <p className={classes.error}>This field is required.</p>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    control={control}
                    rules={{
                      required: true
                    }}
                    render={({ field }) => (
                      <TextField
                        id="fromDate"
                        label="From Date"
                        required
                        type="date"
                        fullWidth
                        {...field}
                        InputLabelProps={{
                          shrink: true
                        }}
                      />
                    )}
                    name="fromDate"
                  />
                  {errors.fromDate && (
                    <p className={classes.error}>This field is required.</p>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    control={control}
                    rules={{
                      required: true
                    }}
                    render={({ field }) => (
                      <TextField
                        id="toDate"
                        fullWidth
                        label="To Date"
                        required
                        type="date"
                        {...field}
                        InputLabelProps={{
                          shrink: true
                        }}
                      />
                    )}
                    name="toDate"
                  />
                  {errors.toDate && (
                    <p className={classes.error}>This field is required.</p>
                  )}
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
                      onClick={handleSubmit(onSubmitHandler)}
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
