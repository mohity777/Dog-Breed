import  CardMedia  from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import React from "react"
import { useLocation } from "react-router";
import Row from "../../Components/Row";

let keyLabel = [
  { key: "name", label: "Name" },
  { key: "breed_group", label: "Breed Group" },
  { key: "bred_for", label: "Bred For" },
  { key: "life_span", label: "Life Span" },
  { key: "origin", label: "Origin" },
  { key: "temperament", label: "Temperament" },
];

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    alignItems: "center",
    height: "100vh",
    width: "100%",
  },
  left: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: "0px 9px",
    maxWidth: "80vw",
    boxShadow: "0px 0px 10px 2px rgb(200, 200, 200)",
    minHeight: "82vh",
    margin: "10px 10px",
  },
  metric: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  image: {
    maxHeight: "100",
    maxWidth: "35%",
    objectFit: "contain",
    boxShadow: "0px 0px 10px 2px rgb(200, 200, 200)",
    margin: "10px",
  },
});


const Detail = props => {

    const location = useLocation();
    const classes = useStyles();

    return (
      <div className={classes.container}>
        <CardMedia
          component="img"
          className={classes.image}
          image={location.state.item?.image?.url}
        />
        <div className={classes.left}>
          {keyLabel.map((k, index) => (
            <Row
              label={k.label}
              key={index}
              value={location.state.item[k.key]}
            />
          ))}
          <div className={classes.metric}>
            <Row
              label={"Weight (metric)"}
              value={location.state.item?.weight?.metric}
            />
            <Row
              label={"Weight (imperial)"}
              value={location.state.item?.weight?.imperial}
            />
            <Row
              label={"Height (metric)"}
              value={location.state.item?.height?.metric}
            />
            <Row
              label={"Height (imperial)"}
              value={location.state.item?.height?.imperial}
            />
          </div>
        </div>
      </div>
    );
}

export default Detail;