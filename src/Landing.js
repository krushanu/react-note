import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

class Landing extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<Router>
				<div>
					<Switch>
						<Route exact path="/">
							<Login />
						</Route>
						<Route path="/home">
							<Home />
						</Route>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default Landing;
