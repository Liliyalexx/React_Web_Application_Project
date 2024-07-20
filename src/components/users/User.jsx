import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { Fragment } from 'react';

const User = ({ getUser, user, loading }) => {
  const { login } = useParams(); // Extract the login parameter from the URL

  useEffect(() => {
    if (login) {
      console.log(
        `Fetching user data from: https://api.github.com/users/${login}`
      );
      getUser(login); // Fetch user data based on the login parameter
    }
  }, [login, getUser]);

  if (loading) return <Spinner />;

  const {
    name,
    company,
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
      Hireable:{' '}
      {hireable ? (
        <i className='fas facheck text-success' />
      ) : (
        <i className='fas fa-times-circle text-danger' />
      )}
      <div className='card'>
        <img
          src={avatar_url}
          alt={name}
          className='round-img'
          style={{ width: '150px' }}
        />

        <h3>{name}</h3>
        <p>Location: {location}</p>
        <div>
          {bio && (
            <Fragment>
              <h3> Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <Link to={html_url} className='btn btn-dark my-1'>
            Visit GitHub Profile
          </Link>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username:</strong>
                  {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company:</strong>
                  {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website:</strong>
                  {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
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
