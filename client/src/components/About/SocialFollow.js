import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SocialFollow.css"
import {
    faGithub,
    faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";


export default function SocialFollow() {
  return (
    <div>
    <div className="social-container">
        <div className="name-icon-container">
            <h3>Ramiro Hernandez</h3>
            <div className="icons-container">
                <a href="https://github.com/RamaHernandez"
                target="_blank" rel="noreferrer"
                  className="github social">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/ramanandez/"
                target="_blank" rel="noreferrer"
                  className="linkedin social">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
            </div>
        </div>
        <div className="name-icon-container">
            <h3>Nicolas Bringas</h3>
            <div className="icons-container">
                <a href="https://github.com/Nicolas0210"
                target="_blank" rel="noreferrer"
                  className="github social">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/nicolas-bringas-72a45a208/"
                target="_blank" rel="noreferrer"
                  className="linkedin social">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
            </div>
        </div>
        <div className="name-icon-container">
            <h3>Marcos Guzman</h3>
            <div className="icons-container">
                <a href="https://github.com/Mmgs94"
                target="_blank" rel="noreferrer"
                  className="github social">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/marcos-guzman-224b6423a/"
                target="_blank" rel="noreferrer"
                  className="linkedin social">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
            </div>
        </div>
        <div className="name-icon-container">
            <h3>Juan Carracedo</h3>
            <div className="icons-container">
                <a href="https://github.com/juancarracedo7"
                target="_blank" rel="noreferrer"
                  className="github social">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/juan-cruz-carracedo-72716711a"
                target="_blank" rel="noreferrer"
                  className="linkedin social">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
            </div>
        </div>
        <div className="name-icon-container">
            <h3>Giselle Taboada</h3>
            <div className="icons-container">
                <a href="https://github.com/GiseTaboada1990"
                target="_blank" rel="noreferrer"
                  className="github social">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/elizabeth-giselle-taboada-fullstackdeveloper/"
                target="_blank" rel="noreferrer"
                  className="linkedin social">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
            </div>
        </div>
        <div className="name-icon-container">
            <h3>Donaldo Barraza</h3>
            <div className="icons-container">
                <a href="https://github.com/Donaldo-1997"
                target="_blank" rel="noreferrer"
                  className="github social">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/donaldo-barraza-madrid-fullstackdeveloper/"
                target="_blank" rel="noreferrer"
                  className="linkedin social">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
            </div>
        </div>
        <div className="name-icon-container">
            <h3>Benjamin Malo</h3>
            <div className="icons-container">
                <a href="https://github.com/Benjamalo"
                target="_blank" rel="noreferrer"
                  className="github social">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/benjamin-malo-teixeira/"
                target="_blank" rel="noreferrer"
                  className="linkedin social">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
            </div>
        </div>
    </div>
    </div>
  );
}