import * as React from 'react';

interface BlogLayoutProps {
  children: React.ReactNode;
  date?: string;
  title: string;
}

const BlogLayout = React.memo<BlogLayoutProps>(({ children, date, title }) => {
  return (
    <>
      <h2>{title}</h2>
      {date ? <small>{date}</small> : null}
      {children}
    </>
  );
});

export default BlogLayout;
