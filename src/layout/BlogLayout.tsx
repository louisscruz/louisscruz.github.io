import * as React from 'react';
import Seo from '../components/Seo';

interface BlogLayoutProps {
  children: React.ReactNode;
  date?: string;
  title: string;
}

const BlogLayout = React.memo<BlogLayoutProps>(({ children, date, title }) => {
  return (
    <>
      <Seo subTitle={title} />
      <h2>{title}</h2>
      {date ? <small>{date}</small> : null}
      {children}
    </>
  );
});

export default BlogLayout;
