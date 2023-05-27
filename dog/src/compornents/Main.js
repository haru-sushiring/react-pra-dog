import React, { useEffect, useState} from "react";
import "../styles/main.css";
import { fetchImages } from "./api";
import Gallery from "./Gallery";

function Main() {
    const [urls, setUrls] = useState(null);
    useEffect(() => {
        fetchImages("shiba").then((fetchedUrls) => {
            console.log(fetchedUrls);
            setUrls(fetchedUrls);
        });
    }, []);
  return (
    <>
      <section className="section">
        <div className="container">
          <Gallery urls={urls} />
        </div>
      </section>
    </>
  );
}

export default Main;
