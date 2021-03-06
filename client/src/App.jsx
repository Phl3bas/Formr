import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import { connect } from 'react-redux';
import * as actions from './actions';
import LandingPage from './views/LandingPage';

const Dashboard = props => {
  return <h2>Dashboard</h2>;
};

const SurveyNew = props => {
  return <h2>SurveyNew</h2>;
};

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/surveys' component={Dashboard} />
            <Route exact path='/surveys/new' component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
