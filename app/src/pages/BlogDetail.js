import React from 'react';
import BLOGS from '../data/blogs';

//helper function get blog item based on id passed in
function getBlog(id) {
  return BLOGS.filter((blog) => blog.id === id)[0];
}

const BlogDetail = (props) => {
  const blogID = props.location.blogProps.id;
  const currentBlog = getBlog(blogID);
  console.log(currentBlog.img);
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col items-start justify-center space-y-20 px-6 py-36 lg:w-1/2 md:py-60'>
        <p className='text-3xl text-left md:text-7xl font-medium'>
          {currentBlog.title}
        </p>
        <img
          src={`/${currentBlog.img}`} //be careful with the very ahead /
          alt='Iamge'
          className='object-cover'
        />
        <p className='text-base font-light text-left whitespace-pre-wrap leading-loose'>
          {currentBlog.content}
        </p>
      </div>
    </div>
  );
};

export default BlogDetail;
