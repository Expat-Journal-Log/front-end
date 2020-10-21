import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
	Container,
	Card,
	CardContent,
	CardMedia,
	TextField,
	Button,
} from '@material-ui/core';
import useStyles from '../formStyle';

import * as yup from 'yup';
import axios from 'axios';
import logo from '../assets/expatLogLogo.svg';

// const useStyles = makeStyles({
// 	container: {
// 		// border: '1px solid red',
// 		display: 'flex',
// 		flexFlow: 'column nowrap',
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 		height: '100vh',
// 		backgroundImage:
// 			"url('https://images.unsplash.com/photo-1534445867742-43195f401b6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80')",
// 	},
// 	card: {
// 		// border: '1px solid red',
// 		display: 'flex',
// 		flexDirection: 'column',
// 		width: '40rem',
// 		alignItems: 'center',
// 		marginBottom: '2rem',
// 		padding: '2rem 0',
// 		fontSize: '1.6rem',
// 	},
// 	logo: {
// 		width: '10rem',
// 		margin: '2rem 0 1rem',
// 	},
// 	cardContent: {
// 		display: 'flex',
// 		flexFlow: 'column nowrap',
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 	},
// 	form: {
// 		// border: '1px solid pink',
// 		display: 'flex',
// 		flexDirection: 'column',
// 		alignItems: 'center',
// 		margin: '2rem 0 0',
// 		padding: '0',
// 	},
// 	formSection: {
// 		// border: '1px solid green',
// 		width: '32rem',
// 		fontSize: '1.6rem',
// 		margin: '0 0 1rem',
// 	},
// 	input: {
// 		fontSize: '1.4rem',
// 	},
// 	inputLabel: {
// 		fontSize: '1.4rem',
// 	},
// 	errors: {
// 		color: '#FF0E0A',
// 		margin: '1rem 0 1.6rem',
// 	},
// 	submitBtn: {
// 		// border: '1px solid green',
// 		padding: '0.5rem 0',
// 		textTransform: 'capitalize',
// 		color: '#ffffff',
// 		backgroundColor: '#3590F3',
// 		'&:disabled': {
// 			color: '#ffffff',
// 			backgroundColor: '#65ABF6',
// 		},
// 		'&:hover': {
// 			color: '#ffffff',
// 			backgroundColor: '#3590F3',
// 		},
// 	},
// 	disclaimer: {
// 		fontSize: '1.2rem',
// 		textAlign: 'center',
// 	},
// 	loginLink: {
// 		color: '#3590F3',
// 		textDecoration: 'none',
// 		fontWeight: '700',
// 	},
// });

const registerSchema = yup.object().shape({
	// need to validate that username hasn't been used before
	username: yup.string().required('Username is required'),
	password: yup.string().required('Password is required'),
	first_name: yup.string().required('First name is required'),
	last_name: yup.string().required('Last name is required'),
	// need to validate that email hasn't been used before
	email: yup
		.string()
		.email('Email must be formatted correctly')
		.required('Email is required'),
});

// 🎒 Initial Values
const initRegisterFormValues = {
	username: '',
	password: '',
	first_name: '',
	last_name: '',
	email: '',
};
const initRegisterFormErrors = {
	username: '',
	password: '',
	first_name: '',
	last_name: '',
	email: '',
};
const initDisabledSubmitButton = true;

export default function Register() {
	const classes = useStyles();
	// 🎒 State
	const [registerFormValues, setRegisterFormValues] = useState(
		initRegisterFormValues
	);
	const [registerFormErrors, setRegisterFormErrors] = useState(
		initRegisterFormErrors
	);
	const [disabledSubmitButton, setDisabledSubmitButton] = useState(
		initDisabledSubmitButton
	);

	// 🎒 Runs every time form changes
	const onChange = (evt) => {
		const { name, value } = evt.target;
		// uncomment if checkboxes are in form, add checked and type to line above
		// const valueToUse = type === "checkbox" ? checked : value;
		yup
			.reach(registerSchema, name)
			.validate(value)
			.then(() => {
				setRegisterFormErrors({
					...registerFormErrors,
					[name]: '',
				});
			})
			.catch((err) => {
				console.log('error', err);
				setRegisterFormErrors({
					...registerFormErrors,
					[name]: err.errors[0],
				});
			});
		setRegisterFormValues({
			...registerFormValues,
			[name]: value,
		});
	};

	// 🎒 Runs every time form is submitted
	const submitRegisterForm = (evt) => {
		evt.preventDefault();
		const newUser = {
			username: registerFormValues.username,
			password: registerFormValues.password,
			first_name: registerFormValues.first_name,
			last_name: registerFormValues.last_name,
			email: registerFormValues.email,
		};
		console.log('New User', newUser);

		axios
			.post('', newUser)
			.then((res) => {
				setRegisterFormValues(initRegisterFormValues);
			})
			.catch((err) => {
				console.dir(err);
			});
	};

	useEffect(() => {
		registerSchema.isValid(registerFormValues).then((valid) => {
			setDisabledSubmitButton(!valid);
		});
	}, [registerFormValues]);

	return (
		<>
			<Container className={classes.container}>
				<Card className={classes.card}>
					<CardMedia
						src={logo}
						component='img'
						className={classes.logo}
						// image={require('../assets/expatLogoCircle.png')}
						title='The Expat Log'
					/>
					<CardContent className={classes.cardContent}>
						<h2>Sign up to see posts from your friends.</h2>
						<form className={classes.form} onSubmit={submitRegisterForm}>
							<TextField
								className={classes.formSection}
								InputProps={{ className: classes.input }}
								InputLabelProps={{ className: classes.inputLabel }}
								id='username'
								label='Username'
								name='username'
								type='text'
								variant='outlined'
								onChange={onChange}
								value={registerFormValues.username}
							/>
							<TextField
								className={classes.formSection}
								InputProps={{ className: classes.input }}
								InputLabelProps={{ className: classes.inputLabel }}
								id='password'
								label='Password'
								name='password'
								type='password'
								variant='outlined'
								onChange={onChange}
								value={registerFormValues.password}
							/>
							<TextField
								className={classes.formSection}
								InputProps={{ className: classes.input }}
								InputLabelProps={{ className: classes.inputLabel }}
								id='first_name'
								label='First Name'
								name='first_name'
								type='text'
								variant='outlined'
								onChange={onChange}
								value={registerFormValues.first_name}
							/>
							<TextField
								className={classes.formSection}
								InputProps={{ className: classes.input }}
								InputLabelProps={{ className: classes.inputLabel }}
								id='last_name'
								label='Last Name'
								name='last_name'
								type='text'
								variant='outlined'
								onChange={onChange}
								value={registerFormValues.last_name}
							/>
							<TextField
								className={classes.formSection}
								InputProps={{ className: classes.input }}
								InputLabelProps={{ className: classes.inputLabel }}
								id='email'
								label='Email'
								name='email'
								type='email'
								variant='outlined'
								onChange={onChange}
								value={registerFormValues.email}
							/>

							{/* 🎒 VALIDATION ERRORS */}
							<div className={classes.errors}>
								<div>{registerFormErrors.username}</div>
								<div>{registerFormErrors.password}</div>
								<div>{registerFormErrors.first_name}</div>
								<div>{registerFormErrors.last_name}</div>
								<div>{registerFormErrors.email}</div>
							</div>

							<Button
								disabled={disabledSubmitButton}
								variant='contained'
								className={`${classes.formSection} ${classes.submitBtn}`}
							>
								Register
							</Button>
						</form>
						<p className={classes.disclaimer}>
							By signing up, you agree to our Terms, which we have not created
							yet.
						</p>
					</CardContent>
				</Card>
				<Card className={classes.card}>
					<p>
						Have an account?{' '}
						<Link to='/' className={classes.loginLink}>
							Log In
						</Link>
					</p>
				</Card>
			</Container>
		</>
	);
}
