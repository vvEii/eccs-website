import React from 'react';
import PostCard from '../components/PostCard';
import BLOGS from '../data/blogs';

const Blog = () => {
  return (
    <div className='flex flex-col justify-center items-center space-y-20 my-60 '>
      {BLOGS.map((blog) => (
        <PostCard
          date={blog.date}
          title={blog.title}
          abstract={blog.abstract}
          image={blog.img}
          key={blog.id}
          id={blog.id}
        />
      ))}
    </div>
  );
};

export default Blog;
