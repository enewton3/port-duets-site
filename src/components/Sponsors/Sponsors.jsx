import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  sponsors: {
    fontFamily: "Libre Baskerville",
    marginTop: "2vh",
    textAlign: "center",
  },
  bigHeader: {
    fontSize: "1.7rem",
  },
  heading: {
    fontSize: "1.3rem",
  },
}));

export default function Sponsors() {
  const classes = useStyles();
  return (
    <div className={classes.sponsors}>
      <h2 className={classes.bigHeader}>
        The Friends of the Massachusetts General Cancer Center
      </h2>
      <h3 className={classes.heading}>Pioneering Sponsor ($25,000)</h3>
      <p>MaryLynn and Joseph Antonellis</p>
      <h3 className={classes.heading}>Innovative Sponsor ($10,000)</h3>
      <p>The Trefler Foundation</p>
      <p>Deirdre Giblin</p> <p>Ron and Deborah Krantz</p>
      <h3 className={classes.heading}>Gold Sponsor ($5,000)</h3>
      <p>Dr. and Mrs. Carlos Fernández-del Castillo</p>
      <p>The Fairfield Foundation</p>
      <p>The Ruggles Family Foundation</p>
      <p>Marion Martignetti</p>
      <p>Susanna and Jack Quinn</p>
      <p>Dr. Andrew Warshaw and Mrs. Brenda Flavin Warshaw</p>
      <h3 className={classes.heading}>Silver Sponsor ($2,500)</h3>
      <p>Susan and Kevin Barry</p>
      <p>Felton, Berlin & Erdmann Insurance Services, Inc.</p>
      <p>Dr. Bruce and Mrs. Madelyn Donoff</p>
      <p>N. Marcello and Pamela Micozzi</p>
      <p>S + H Construction</p>
      <p>Drs. Kenneth Tanabe and Michele Gadd</p>
      <h3 className={classes.heading}>Bronze Sponsor ($1,000)</h3>
      <p>Patricia Baker</p>
      <p>Beatrice Burke</p>
      <p>Julia M. Forbes </p>
      <p>Brad Griffith</p>
      <p>Shawn and Sarah Haviland</p>
      <p>Karen Johansen and Gardner Hendrie</p>
      <p>Geoffrey and Roberta Levy</p>
      <p>Sonia and Eduardo Perez</p>
      <p>Peggy Scott</p>
      <p>Vincent and Alicia Wolfington</p>
    </div>
  );
}
