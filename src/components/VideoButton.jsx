import React from "react";

//MUI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  bg1: {
    borderRadius: "50%",
    background: "#ebeff8",
    width: " 88px",
    height: " 88px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transition: "all .4s",
    margin: '5px 17px',
    "&:hover": {
      background: "#e8f2fc"
    },
    "&:hover $bg2": {
      background: "#cfe4f9"
    },
    "&:hover $bg3": {
      background: "#3278ea"
    }
  },
  bg2: {
    borderRadius: "50%",
    background: "#d7dff0",
    width: "62px",
    height: "62px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all .4s",
  },
  bg3: {
    borderRadius: "50%",
    background: "#8ba2d4",
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all .4s"
  },
  triangle: {
    width: "0",
    height: "0",
    borderTop: " 8px solid transparent",
    borderBottom: "8px solid transparent",
    borderLeft: "12px solid #fff"
  },
  link: {
    fontSize: "18px",
    color: "#212529",
    textDecoration: "underline",
    lineHeight: "30px",
    cursor: "pointer"
  },
  wrap:{
    padding: '26px'
  }
}));

const VideoButton = props => {
  const classes = useStyles();
  const { link } = props;

  return (
    <div className={classes.wrap}>
      <a href={link}>
        <div className={classes.bg1}>
          <div className={classes.bg2}>
            <div className={classes.bg3}>
              <div className={classes.triangle}></div>
            </div>
          </div>
        </div>
        <span className={classes.link}>Видеоанкета</span>
      </a>
    </div>
  );
};

export default VideoButton;
