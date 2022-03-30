import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import useStyles from "./styles";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ProjectDetails({ projectInfo }) {
  const classes = useStyles();
  return (
    <Box
      sx={{
        flexGrow: 1
      }}
    >
      {projectInfo.map(project => {
        return (
          <Grid container spacing={2} sx={{ p: 2 }}>
            <Grid item xs={1.5}>
              <img src="project.png" alt="poject icon" width="80" height="80" />
            </Grid>
            <Grid item xs={8.5}>
              <div>
                <span
                  className={classes.projectTitle}
                >{`${project.title}`}</span>{" "}
                {`${project.fromDate} -  ${project.toDate}`}
              </div>
              <div>{project.description}</div>
              <div>{project.location}</div>
            </Grid>
            <Grid item xs={1.5}>
              <IconButton>
                <EditIcon />
              </IconButton>
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        );
      })}
    </Box>
  );
}
