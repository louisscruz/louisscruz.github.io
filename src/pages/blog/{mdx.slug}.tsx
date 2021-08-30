import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import BlogPostLayout from '../../layout/BlogLayout';

import type { BlogPostQueryQuery } from '../../../graphql-types';

interface BlogPostProps {
  data: BlogPostQueryQuery;
}

const BlogPost = React.memo<BlogPostProps>(({ data }) => {
  const blogPost = data.mdx;

  if (!blogPost) {
    throw new Error('Expected there to be a page, but there was not one.');
  }

  const { frontmatter } = blogPost;

  if (!frontmatter) {
    throw new Error('Expected there to be frontmatter, but there was not.');
  }

  const { date, title } = frontmatter;

  return (
    <BlogPostLayout date={date} title={title}>
      <MDXRenderer>{blogPost.body}</MDXRenderer>
    </BlogPostLayout>
  );
});

export const BlogPostQuery = graphql`
  query blogPostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      id
      slug
      timeToRead
      wordCount {
        words
      }
    }
  }
`;

export default BlogPost;
