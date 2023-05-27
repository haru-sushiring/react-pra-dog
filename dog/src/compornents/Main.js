import React from "react";
import "../styles/main.css";

function Main() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="columns is-vcentered is-multiline">
            <div className="column is-3">
              <div className="card">
                <div className="card-image">
                  <figure className="image">
                    <img
                      src="https://images.dog.ceo/breeds/shiba/shiba-8.jpg"
                      alt="cute dog"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
