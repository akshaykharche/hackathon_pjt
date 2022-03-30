import React, { useState } from "react";
import Box from "@mui/material/Box";
import useStyles from "./styles";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import ProjectModal from "./ProjectModal";
import ProjectDetails from "./ProjectDetails";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const onSubmit = data => {
    setProjects(prev => {
      return [...prev, data];
    });
    setOpen(false);
  };

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Box className={classes.aboutMe}>Projects</Box>
        <Chip
          onClick={handleClickOpen}
          icon={<AddCircleRoundedIcon fontSize="medium" />}
          label="Add"
          sx={{
            marginTop: "20px"
          }}
        />
      </Box>
      {projects.length > 0 && <Divider />}
      <Box className={classes.description}>
        <ProjectDetails projectInfo={projects} />
      </Box>
      {open && (
        <ProjectModal
          open={open}
          handleClose={() => setOpen(false)}
          onSubmitHandler={onSubmit}
        />
      )}
    </div>
  );
}
