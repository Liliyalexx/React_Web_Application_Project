import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';

const User = ({ getUser, user, loading }) => {
  const { login } = useParams(); // Use the useParams hook to get the route parameters

  useEffect(() => {
    getUser(login); // Fetch user data based on the login parameter
  }, [login, getUser]);

  if (loading) return <Spinner />;

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login: username,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  return (
    <div>
      <Link to='/' className='btn btn-light'>
        Back to Search
      </Link>
      <div className='card'>
        <img
          src={avatar_url}
          alt={name}
          className='round-img'
          style={{ width: '60px' }}
        />
        <h3>{name}</h3>
        <p>Location: {location}</p>
        <p>Bio: {bio}</p>
        <p>Blog: {blog}</p>
        <p>Followers: {followers}</p>
        <p>Following: {following}</p>
        <p>Public Repos: {public_repos}</p>
        <p>Public Gists: {public_gists}</p>
        <p>Hireable: {hireable ? 'Yes' : 'No'}</p>
        <a href={html_url} className='btn btn-dark btn-sm my-1'>
          More
        </a>
      </div>
    </div>
  );
};

User.propTypes = {
  getUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default User;
