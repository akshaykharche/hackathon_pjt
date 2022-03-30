import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import useStyles from "./styles";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import EditIcon from "@mui/icons-material/Edit";
import TextareaAutosize from "@mui/material/TextareaAutosize";

export default function AboutMe() {
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    setAboutMe(description);
    setOpen(false);
  };

  const onDescriptionChange = e => {
    setDescription(e.target.value);
  };

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Box className={classes.aboutMe}>About me</Box>
        <IconButton onClick={handleClickOpen}>
          {aboutMe.length ? (
            <EditIcon />
          ) : (
            <AddCircleRoundedIcon fontSize="medium" />
          )}
        </IconButton>
      </Box>
      <Box className={classes.description}>{aboutMe}</Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className={classes.dialogTitle}> About me </DialogTitle>
        <DialogContent dividers>
          <TextareaAutosize
            minRows={6}
            maxRows={6}
            style={{ width: 500 }}
            defaultValue={aboutMe}
            onChange={onDescriptionChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
