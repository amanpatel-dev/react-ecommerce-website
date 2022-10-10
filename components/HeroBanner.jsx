import React from "react";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className='="beats-solo'>SMALL TEXT DEMO </p>
        <h3>MID TEXT</h3>
        <img src="" alt="headphones" className="hero-banner-image " />
        <Link href="/product/id">
          <button type="button"> BUTTON TEXT </button>
        </Link>
        <div className="desc">
          <h5>Description</h5>
          <p>DESCRIOPTION</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
