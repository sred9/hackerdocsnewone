import React from "react";
import Topic from "../components/topic/topic";
import Footer from "../components/footer/footer";
import { withPrefix } from "gatsby-link";
import GatsbyConfig from "../../gatsby-config";

import html from "../images/html-5.svg";
import css from "../images/css-3.svg";
import javascript from "../images/javascript.svg";

const IndexPage = () => {
  return (
    <div>
      <header className="hero">
        <div className="hero__wrapper">
          <h1>{GatsbyConfig.siteMetadata.title}</h1>
          <p>
            Welcome to HackerOne's Product Documentation Center!
            <br />
            This is where you can get familiar with HackerOne and explore our
            product features. We provide some tips here that you might find
            useful. This site is open to all and we welcome your feedback!
          </p>
        </div>
      </header>

      <section className="homepage-content">
        <div className="homepage-content__wrapper">
          <div>
            <h1>Getting Started</h1>
            <p>
              Are you a hacker or do you run a program? Choose which book you'd
              like to browse.
            </p>
          </div>

          <div className="topics">
            <Topic url={withPrefix("/hackers.html")}>
              <img
                src={html}
                width="44"
                height="44"
                alt="Hackers"
                className="topic__image"
              />
              <div>
                <h2>HTML</h2>
             
              </div>
            </Topic>

            <Topic url={withPrefix("/programs.html")}>
              <img
                src={css}
                width="44"
                height="44"
                alt="Programs"
                className="topic__image"
              />
              <div>
                <h2>CSS</h2>
              
              </div>
            </Topic>
			
			            <Topic url={withPrefix("/programs.html")}>
              <img
                src={javascript}
                width="44"
                height="44"
                alt="Programs"
                className="topic__image"
              />
              <div>
                <h2>Javascript</h2>
              
              </div>
            </Topic>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndexPage;
