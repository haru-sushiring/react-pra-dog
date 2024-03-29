import React from "react";
import "../styles/main.css";

function Image(props) {
  return (
    <>
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img src={props.src} alt="cute dog!" />
          </figure>
        </div>
      </div>
    </>
  );
}

export default Image;
