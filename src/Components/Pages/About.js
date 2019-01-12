import React from "react";
import dogpic from "./images/pups.jpg";

const styles = {
  hero: {
    backgroundImage: `url(${dogpic})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundBlendMode: "multiply",
    // backgroundColor: "red",
    color: "white",
    textShadow: "0 0 10px black",
    minHeight: "45vh"
  }
};

const About = () => {
  return (
    <div>
      <div
        className="jumbotron jumbotron-fluid text-center d-flex align-items-center justify-content-center"
        style={styles.hero}
      >
        <h1 className="display-4">Welcome to the Pupster App!</h1>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <h3>Sup Pups!</h3>
            <p>Looking to meet your next best friend?</p>
            <p>Man's best friend, that is.</p>
            <p>
              Search our page for your perfect pup match. Swipe to see if they
              like you back!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
