import React from "react";
import Link from "gatsby-link";
import { graphql } from "gatsby";
import Article from "../components/article/article";
import htmlNav from "../pages/html/html-nav.yaml";
import slugify from "slugify";

export default function Template({ data }) {
  const { markdownRemark } = data;

  return (
    <Article
      links={htmlNav}
      path={markdownRemark.frontmatter.path}
      title={markdownRemark.frontmatter.title}
      headings={markdownRemark.headings}
      description={markdownRemark.frontmatter.description}
      docOnGithub={`${markdownRemark.frontmatter.id}.md`}
    >
      <h1>{markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </Article>
  );
}

export const pageQuery = graphql`
  query htmlDocByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        id
        path
        description
      }
      headings(depth: h3) {
        value
      }
    }
  }
`;
