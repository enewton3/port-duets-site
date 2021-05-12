import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  sponsors: {
    fontFamily: "Libre Baskerville",
    marginTop: "2vh",
    textAlign: "center",
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    justifyContent: "space-around",
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

      <div>
        <h3 className={classes.heading}>Pioneering Sponsor</h3>
        <p>MaryLynn and Joseph Antonellis</p>
        <p>Kathleen Corsi and Mark Cosby</p>
      </div>

      <div>
        <h3 className={classes.heading}>Innovative Sponsor</h3>
        <p>Lillian and Leo Barry</p>
        <p>William Collatos</p>
        <p>Deirdre Giblin</p>
        <p>Arthur, Sandra and Sarah Irving</p>
        <p>Kelly Family Foundation</p>
        <p>Ron and Deborah Krantz</p>
        <p>Leslie and Kevin McCafferty</p>
        <p>The Trefler Foundation</p>
      </div>

      <div>
        <h3 className={classes.heading}>Gold Sponsor</h3>
        <p>Joan and Steve Belkin</p>
        <p>Linda and Ben Butcher</p>
        <p>Dr. and Mrs. Carlos Fernández-del Castillo</p>
        <p>Kathryn and John Harris</p>
        <p>Marion Martignetti </p>
        <p>Susanna and Jack Quinn </p>
        <p>The Ruggles Family Foundation</p>
        <p>Whitney and Nicola Savignano</p>
        <p>Dr. Andrew Warshaw and Mrs. Brenda Flavin Warshaw</p>
      </div>

      <div>
        <h3 className={classes.heading}>Silver Sponsor</h3>
        <p>Lisa and David Antonelli </p>
        <p>Susan and Kevin Barry</p>
        <p>Dr. Bruce and Mrs. Madelyn Donoff</p>
        <p>David J. Evans</p>
        <p>Felton, Berlin & Erdmann Insurance Services, Inc.</p>
        <p>Carl J. Martignetti </p>
        <p>N. Marcello and Pamela Micozzi</p>
        <p>S + H Construction </p>
        <p>Drs. Kenneth Tanabe and Michele Gadd</p>
      </div>

      <div>
        <h3 className={classes.heading}>Bronze Sponsor</h3>
        <p>Hillary and Jon Michael Baker, Jr.</p>
        <p>Patricia Baker</p>
        <p>Casey and Mike Buckley</p>
        <p>Beatrice Burke</p>
        <p>Judith and Robert Del Col</p>
        <p>Martha A. Erickson</p>
        <p>Julia M. Forbes</p>
        <p>Brad Griffith</p>
        <p>H. Carr & Sons, Inc. </p>
        <p>Shawn and Sarah Haviland</p>
        <p>Karen Johansen and Gardner Hendrie</p>
        <p>Edward and June Kalman</p>
        <p>Marie Lacy </p>
        <p>Carolyn and Scott Lemone</p>
        <p>Geoffrey and Roberta Levy</p>
        <p>Dr. Keith and Mrs. Cheryl Lillemoe</p>
        <p>Mimi and Scott McDougal</p>
        <p>Lu Ann and Bruce Ohanian</p>
        <p>Sonia and Eduardo Perez</p>
        <p>Melanie and Matthew Ronsheim</p>
        <p>Carol Markey Ryan</p>
        <p>Peggy Scott</p>
        <p>Dr. William U. and Jensie Shipley</p>
        <p>Vincent and Alicia Wolfington </p>
      </div>
    </div>
  );
}
