import React from "react";
import { url } from '../actions/constants'

import meet from '../img/hands.png';

//MUI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  bg1: {
    borderRadius: "50%",
    border: '2px solid #8ba2d4',
    background: "#fff",
    width: " 88px",
    height: " 88px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transition: "all .4s",
    color:'#fff',
    margin: '5px 17px',
    "&:hover": {
      background: "#8ba2d4",
    },
  },
  link: {
    fontSize: "18px",
    color: "#212529",
    textDecoration: "underline",
    lineHeight: "30px",
    cursor: "pointer"
  },
  wrap:{
    padding:' 0px 22px'
  }
}));

const MeetButton = props => {
  const classes = useStyles();
  const { id } = props;

  return (
    <div className={classes.wrap}>
      <a href={`${url + 'children/' + id}`}>
        <div className={classes.bg1}>
            <img src={meet} alt="icon" />
        </div>
        <span className={classes.link}>Познакомиться</span>
      </a>
    </div>
  );
};

export default MeetButton;
