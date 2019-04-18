import React from "react";
import { Link } from "react-router-dom"; 
import heroBg from "../img/purple-hero-original.webp";
import Header from './Header';

function NotFound() {
  return (
    <div>
      <Header useAnchorLinks={false} />
      <section className="not-found">
        <div
          className="background-image"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="container">
          <h1>Page Not Found</h1>
          <p>
            It looks like this page was moved or doesn't exist.
          </p>
          <Link to="/" className="btn">
            Go Home
          </Link>
        </div>
      </section>
    </div>
  );
}

export default NotFound;
