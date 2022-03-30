import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  aboutMe: {
    flexGrow: 1,
    textAlign: "start",
    fontSize: "22px",
    padding: "20px",
    fontWeight: 600
  },
  dialogTitle: {
    fontWeight: 600,
    textAlign: "center"
  },
  description: {
    textAlign: "start",
    marginLeft: "20px",
    fontSize: "16px"
  },
  addButton: {
    fontSize: "18px"
  },
  error: {
    color: "#bf1650"
  },
  projectTitle: {
    fontSize: "18px",
    fontWeight: "600",
    marginRight: "10px"
  },
  projectContainer: {
    display: "flex"
  }
}));
