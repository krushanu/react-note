import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import logo from './logo.svg';
import TextField from '@material-ui/core/TextField';
import './App.css';

const CssTextField = withStyles({
	root: {
		'& .MuiInputLabel-outlined': {
			color: 'aqua',
		},
		'& .MuiInputBase-input': {
			color: 'aqua',
		},
		'& label.Mui-focused': {
			color: 'aqua',
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: '#fefefe',
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: 'aqua',
			},
			'&:hover fieldset': {
				borderColor: 'yellow',
			},
			'&.Mui-focused fieldset': {
				borderColor: '#fefefe',
			},
		},
	},
})(TextField);

const styles = (theme) => ({
	root: {
		'& > *': {
			margin: '5px',
			width: '25ch',
		},
	},
});

class Login extends Component {
	state = {};
	render() {
		const { classes } = this.props;
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<form
						className={classes.root}
						noValidate
						autoComplete="off"
					>
						<CssTextField
							id="outlined-basic"
							label="Login"
							variant="outlined"
						/>
						<CssTextField
							id="outlined-basic"
							label="Password"
							variant="outlined"
							type="password"
						/>
					</form>
					<a
						className="App-link"
						href="/home"
						rel="noopener noreferrer"
					>
						Login
					</a>
				</header>
			</div>
		);
	}
}

export default withStyles(styles)(Login);
