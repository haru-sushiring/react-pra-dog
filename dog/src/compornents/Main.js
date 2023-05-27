import React, { useEffect, useState } from "react";
import "../styles/main.css";
import { fetchImages } from "./api";
import Gallery from "./Gallery";
import Form from "./Form";

function Main() {
  const [urls, setUrls] = useState(null);
  useEffect(() => {
    fetchImages("shiba").then((fetchedUrls) => {
      console.log(fetchedUrls);
      setUrls(fetchedUrls);
    });
  }, []);
  function reloadImages(breed) {
    fetchImages(breed).then((urls) => {
        setUrls(urls);
    });
  }
  return (
    <>
      <section className="section">
        <div className="container">
          <Form onFormSubmit={reloadImages} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Gallery urls={urls} />
        </div>
      </section>
    </>
  );
}

export default Main;
