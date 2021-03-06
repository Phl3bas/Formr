import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a
              href='/auth/google'
              className='waves-effect waves-light btn red darken-1'
            >
              Login With Google
            </a>
          </li>
        );
      default:
        return (
          <li>
            <a
              href='/api/user/logout'
              className='waves-effect waves-light btn red darken-1'
            >
              Logout
            </a>
          </li>
        );
    }
  }

  render() {
    return (
      <div className='navbar-fixed'>
        <nav className='indigo lighten-2'>
          <div className='nav-wrapper'>
            <Link
              to={this.props.auth ? '/surveys' : '/'}
              className='brand-logo center'
            >
              Formr
            </Link>
            <ul className='right'>{this.renderContent()}</ul>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps)(Header);
