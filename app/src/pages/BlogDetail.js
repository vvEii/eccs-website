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
      <div className='flex flex-col items-center justify-center space-y-20 md:w-1/2 md:my-60'>
        <p className='text-7xl font-medium'>{currentBlog.title}</p>
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
