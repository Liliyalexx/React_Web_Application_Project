import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



export class User extends Component{
  componentDidMount = () => {
    this.props.getUser(this.props.match.params.login)
  }
  render(){
    return <div>User</div>
  }
  
};
User.propTypes = {
  getUser: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

export default User;