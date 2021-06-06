import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  link: {
    textDecoration: "none"
  },
  root: {
    maxWidth: 250,
    height: 260,
    margin: "25px 8px",
    transition: "0.1s",
    boxShadow: "0px 0px 10px 2px rgb(200, 200, 200)",
    cursor: "pointer",
    borderRadius: 5,
    padding: 0,
    "&:hover": {
      boxShadow: "0px 0px 12px 8px rgb(190, 190, 190)",
    },
  },
  image: {
    height: 200,
    objectFit: "fill",
  },
  content: {
    padding: 0,
    display:"flex",
    alignItems:"center",
    justifyContent: "center",
    borderWidth:3,
    height: 60
  },
  text: {
    fontWeight: 600,
    fontSize: 15,
    textAlign:"center",
  },
  loadingDiv: {
    width: 250,
    height: 260,
    margin: "25px 10px",
    boxShadow: "0px 0px 10px 2px rgb(200, 200, 200)",
    borderRadius: 5,
    overflow: "hidden"
  },
});

function CustomCard({item, loading}) {

  const classes = useStyles();

  if(loading) return (
    <div className={classes.loadingDiv}>
      <Skeleton  animation="wave" variant="rect" width={250} height={200} />
      <div className={classes.content}>
        <Skeleton variant="text" animation="wave" height={25} width={160}/>
      </div>
    </div>
  );

    return (
      <Link className={classes.link} to={{pathname: '/Detail' , state: {item} }}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              className={classes.image}
              image={item?.image?.url}
            />
            <CardContent className={classes.content}>
              <Typography className={classes.text}>{item?.name}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    );
}

export default CustomCard;