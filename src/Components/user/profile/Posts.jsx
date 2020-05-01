import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Spinner from '../../common/Spinner/index';
import { GET_ALL_RATINGS } from '../../../graphql/queries';
import SomethingWentWrong from '../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../customHooks/useSessionExpired';
import PageCountDisplayer from '../../common/PageCountDisplayer';
import BlogCard from '../../drawer/blogs/BlogCard/BlogCard';
import useActivePageState from '../../../customHooks/useAcitvePageState';

const PostsContainer = () => {
  const limit = 3;
  const activePageNumber = useActivePageState();
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const {
    loading, error, data,
  } = useQuery(GET_ALL_RATINGS, {
    variables: { limit, skip: ((activePageNumber - 1) * limit) },
  });
  if (loading) return <Spinner />;
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data.ratings) {
    const { blogs } = data;
    return (
      <div>
        {
          blogs.map(blog => (
            <BlogCard
              key={blog._id}
              tags={blog.tags}
              id={blog._id}
              author={blog.userId.name}
              authorId={blog.userId._id}
              createdAt={blog.createdAt}
              updatedAt={blog.updatedAt}
              timeToRead={blog.timeToRead}
              title={blog.title}
              ratings={blogs.userId.ratings}
            />
          ))}
        <div className="pt3">
          <PageCountDisplayer
            pageCount={data.ratings.pages}
            activePageNumber={activePageNumber}
          />
        </div>
      </div>
    );
  }
  if (isSessionExpired(data.ratings)) {
    // since the component hasn't rendered or returned anything,
    // we use redirectOnSessionExpiredBeforeRender function
    return redirectOnSessionExpiredBeforeRender();
  }
  // Random errors
  return <SomethingWentWrong message="An unexpected error has occured" />;
};

export default PostsContainer;
