import React from "react";
import InstagramIcon from "./assets/iconmonstr-instagram-11.svg";

const InstagramLogo = () => {
  const instagramUrl = "https://www.instagram.com/jesse_karwaski_fitness/"; // Replace with your Instagram URL

  return (
    <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
      <img
        src={InstagramIcon} // Replace with the correct file path of your Instagram logo
        alt="Instagram"
        width="25" // Adjust the width and height as needed
        height="25"
      />
    </a>
  );
};

export default InstagramLogo;
