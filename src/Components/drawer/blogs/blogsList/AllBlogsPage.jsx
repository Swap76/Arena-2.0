import React from 'react';
import PropTypes from 'prop-types';
import BlogCard from '../BlogCard/BlogCard';

const AllBlogsPage = ({ blogs, setSnackbarMessage }) => {
  const BlogsArray = blogs.map(blog => (
    <BlogCard
      setSnackbarMessage={setSnackbarMessage}
      key={blog._id}
      tags={blog.tags}
      id={blog._id}
      createdAt={blog.createdAt}
      title={blog.title}
      timeToRead={blog.timeToRead}
      author={blog.userId.name}
      authorId={blog.userId._id}
      updatedAt={blog.updatedAt}
      ratings={blog.userId.ratings}
    />
  ));
  return (
    <div>
      {BlogsArray}
    </div>
  );
};

AllBlogsPage.propTypes = {
  blogs: PropTypes.array.isRequired,
  setSnackbarMessage: PropTypes.func.isRequired,
};

export default AllBlogsPage;
