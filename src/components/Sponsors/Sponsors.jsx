import { Divider, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  sponsors: {
    fontFamily: "Libre Baskerville",
    marginTop: "17vh",
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
      <Divider />
      <h2 className={classes.bigHeader}>
        The Friends of the Massachusetts General Cancer Center
      </h2>
      <Divider />
      <h3 className={classes.heading}>Pioneering Sponsor ($25,000)</h3>
      <p>MaryLynn and Joseph Antonellis</p>
      <Divider />
      <h3 className={classes.heading}>Innovative Sponsor ($10,000)</h3>
      <p>The Trefler Foundation</p>
      <Divider />
      <h3 className={classes.heading}>Gold Sponsor ($5,000)</h3>
      <p>The Fairfield Foundation</p>
      <p>The Ruggles Family Foundation</p>
      <p>Susanna and Jack Quinn</p>
      <p>Dr. Andrew Warshaw and Mrs. Brenda Flavin Warshaw</p>
      <Divider />
      <h3 className={classes.heading}>Silver Sponsor ($2,500)</h3>
      <p>Susan and Kevin Barry</p>
      <p>Felton, Berlin & Erdmann Insurance Services, Inc.</p>
      <p>Dr. Bruce and Mrs. Madelyn Donoff</p>
      <p>N. Marcello and Pamela Micozzi</p>
      <p>S + H Construction</p>
      <Divider />
      <h3 className={classes.heading}>Bronze Sponsor ($1,000)</h3>
      <p>Julia M. Forbes </p>
      <p>Brad Griffith</p>
      <p>Shawn and Sarah Haviland</p>
      <p>Peggy Scott</p>
      <p>Vincent and Alicia Wolfington</p>
    </div>
  );
}
