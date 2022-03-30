import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  chip: {
    background: "white !important"
  },
  edit: {
    background: "white !important",
    borderRadius: 5,
    cursor: "pointer",
    marginLeft: 3
  },
  icon: {
    verticalAlign: "middle",
    display: "inline-flex"
  },
  fileInput: {
    width: "97%",
    margin: "10px 0"
  },
  heading: {
    color: "rgba(0,183,255, 1)"
  },
  image: {
    marginLeft: "15px"
  },
  error: {
    color: "#bf1650"
  }
}));
