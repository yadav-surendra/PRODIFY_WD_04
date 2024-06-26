import React from 'react';
import "./Socia.css";

export const Socia = () => {
  return (
    <div className="home__social">
      <div className="child">
      <a
      rel="noreferrer"
        href="https://www.instagram.com/"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-instagram-alt ins"></i>
      </a>

      <a
      rel="noreferrer"
        href="https://dribble.com/"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-dribbble"></i>
      </a>

      <a
      rel="noreferrer"
        href="https://github.com/"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-github-alt"></i>
      </a>
      </div>
      
    </div>
  );
}
