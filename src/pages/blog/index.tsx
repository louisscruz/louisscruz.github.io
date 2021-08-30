import * as React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import type { GetAllBlogPostsQuery } from '../../../graphql-types';

interface BlogProps {
  data: GetAllBlogPostsQuery;
}

const PostPreview = styled.li`
  list-style: none;
  height: 80px;
`;

const Blog = React.memo<BlogProps>(({ data }) => {
  return (
    <>
      <h2>Posts</h2>
      <ul>
        {data.allMdx.edges.map(edge => {
          const {
            node: { excerpt, id, slug, timeToRead },
          } = edge;
          const title = edge.node.frontmatter?.title;

          return (
            <PostPreview key={id}>
              <Link to={`/blog/${slug}` || '/blog'}>{title || id}</Link>
              {typeof timeToRead === 'number' ? (
                <small>
                  {timeToRead} {timeToRead === 1 ? 'minute' : 'minutes'} to read
                </small>
              ) : null}
              <p>{excerpt}</p>
            </PostPreview>
          );
        })}
      </ul>
    </>
  );
});
// allMdx(sort: { fields: frontmatter___date, order: DESC }) {

export const pageQuery = graphql`
  query GetAllBlogPosts {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      edges {
        node {
          id
          slug
          excerpt(pruneLength: 49, truncate: false)
          timeToRead
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
          }
          wordCount {
            paragraphs
            sentences
            words
          }
        }
      }
    }
  }
`;

export default Blog;
