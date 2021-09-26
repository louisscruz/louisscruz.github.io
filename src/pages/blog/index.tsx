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

const Ul = styled.ul`
  padding: 0;
`;

const PublishDate = styled.small`
  display: block;
  font-style: italic;
`;

const TimeToRead = styled.small`
  display: block;
`;

const Blog = React.memo<BlogProps>(({ data }) => (
  <>
    <h2>Posts</h2>
    <Ul>
      {data.allMdx.edges.map(edge => {
        const {
          node: { excerpt, frontmatter, id, slug, timeToRead },
        } = edge;
        const title = edge.node.frontmatter?.title;
        const url = `/blog/${slug}` || '/blog';

        return (
          <PostPreview key={id}>
            <Link to={url}>{title || id}</Link>
            {typeof frontmatter?.date === 'string' ? (
              <PublishDate>{frontmatter.date}</PublishDate>
            ) : null}
            {typeof timeToRead === 'number' ? (
              <TimeToRead>
                {timeToRead} {timeToRead === 1 ? 'minute' : 'minutes'} to read
              </TimeToRead>
            ) : null}
            <p>
              {excerpt}{' '}
              <Link to={url} aria-label={`Read more of ${title}`}>
                read more
              </Link>
            </p>
          </PostPreview>
        );
      })}
    </Ul>
  </>
));
// allMdx(sort: { fields: frontmatter___date, order: DESC }) {

export const pageQuery = graphql`
  query GetAllBlogPosts {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      edges {
        node {
          id
          slug
          excerpt(pruneLength: 200, truncate: false)
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
