import React from "react";
import { url } from "../actions/constants";

//MUI
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from './VideoButton';

const useStyles = makeStyles(theme => ({
  paper: {
    display: "flex",
    justifyContent: "space-between",
    boxShadow: " 0 0 24px rgba(0,0,0,0.16)",
    marginBottom: "30px"
  },
  description: {
    padding: "2.4rem 2.1rem",
    width: "25%",
    textAlign: "left"
  },
  imgItem: {
    maxWidth: "422px",
    maxHeight: "355px"
  },
  imgWrapp: {
    padding: "13px"
  },
  gender: {
    fontSize: "18px",
    lineHeight: "20px",
    color: "blue"
  },
  location: {
    fontSize: "18px",
    lineHeight: "20px",
    display: "block",
    marginBottom: "10px"
  }
}));

const Card = props => {
  const { name, id, photo_path, gender, age, character, region } = props.row;
  const classes = useStyles();
  let imgUrl = url + photo_path;

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <div className={classes.description}>
              <h3 className={classes.title}>{name}</h3>
              <span className={classes.location}>{region.title}</span>
              <span className={classes.gender}>
                {age}, {gender.title}
              </span>
              <p>{character}</p>
            </div>
            <div className={classes.imgWrapp}>
              <img className={classes.imgItem} src={imgUrl} alt="Avatar" />
            </div>
            <div><Button /></div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default Card;
