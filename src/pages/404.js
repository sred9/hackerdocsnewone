import React from "react";
import Topic from "../components/topic/topic";
import Footer from "../components/footer/footer";
import { withPrefix } from "gatsby-link";
import GatsbyConfig from "../../gatsby-config";

import html from "../images/html-5.svg";
import css from "../images/css-3.svg";
import javascript from "../images/javascript.svg";


const NotFoundPage = () => (

 <section className="homepage-content error-page">
 
        <div className="homepage-content__wrapper">
  <div>
    <h1>Nothing Found</h1>
	
    <p>Sorry, but nothing matched your search terms. Please try again with some different keywords. If you're still unsuccessful, you can always <a href="#">request an article</a> or <a href="#">write one yourself</a>.</p>
  </div>
</div>
</section>    
 
 
 
 
 


 
  
);

export default NotFoundPage;

