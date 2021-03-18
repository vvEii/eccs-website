import React from 'react';
import PostCard from '../components/PostCard';
import BLOGS from '../data/blogs';

const Blog = () => {
  return (
    <div className='mx-24 mt-40 mb-24 grid grid-cols-2 gap-10'>
      {BLOGS.map((blog) => (
        <PostCard
          date={blog.date}
          title={blog.title}
          img={blog.img}
          abstract={blog.abstract}
        />
      ))}
    </div>
  );
};

export default Blog;
