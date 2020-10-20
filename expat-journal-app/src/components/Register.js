import React, { useState, useEffect } from 'react';
import {
	Container,
	Card,
	CardContent,
	CardMedia,
	Typography,
	makeStyles,
} from '@material-ui/core';
import * as yup from 'yup';
import axios from 'axios';

// 🎒 Style
const useStyles = makeStyles({
	container: {
		// border: '1px solid green',
		display: 'flex',
		flexFlow: 'column nowrap',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100vh',
		backgroundImage:
			"url('https://images.unsplash.com/photo-1534445867742-43195f401b6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80')",
	},
	card: {
		// border: '1px solid blue',
		display: 'flex',
		flexFlow: 'row nowrap',
		justifyContent: 'center',
		alignItems: 'center',
		opacity: '0.9',
	},
	form: {
		// border: '1px solid red',
		display: 'flex',
		flexFlow: 'column nowrap',
		// alignItems: 'flex-start',
		margin: '0 auto',
	},
	formSection: {
		// border: '1px solid green',
		marginBottom: '2%',
	},
	submit: {
		width: '20%',
		margin: '0 auto',
	},
	// logo: {
	// 	border: '1px solid yellow',
	// 	height: '11rem',
	// },
});

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
	// 🎒 Style
	const classes = useStyles();
	// 🎒 State
	const [registerFormValues, setRegisterFormValues] = useState(
		initRegisterFormValues
	);
	const [registerFormErrors, setRegisterFormErrors] = useState(
		initRegisterFormErrors
	);
	// const [users, setUsers] = useState({ setRegisterFormValues });
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

	// 🎒 I BELIEVE THIS IS UNECCEASSRY BUT LEFT IT FOR NOW IN CASE I'M WRONG
	// 🎒 use setErrors to set RegisterFormErrors
	// const setErrors = (name, value) => {
	// 	yup
	// 		.reach(registerSchema, name)
	// 		.validate(value)
	// 		.then(() => setRegisterFormErrors({ ...registerFormErrors, [name]: ' ' }))
	// 		.catch((err) =>
	// 			setRegisterFormErrors({
	// 				...registerFormErrors,
	// 				[name]: err.registerFormErrors[0],
	// 			})
	// 		);
	// };

	useEffect(() => {
		registerSchema.isValid(registerFormValues).then((valid) => {
			setDisabledSubmitButton(!valid);
		});
	}, [registerFormValues]);

	return (
		<Container className={classes.container}>
			<Card className={classes.card}>
				<CardContent>
					{/* <CardMedia
						className={classes.logo}
						image={require('../assets/expatLogo.png')}
						title='island in italy'
					/> */}
					<Typography variant='h1' component='h1'>
						Expat Journal
					</Typography>
					<form onSubmit={submitRegisterForm} className={classes.form}>
						{/* 🎒 USERNAME */}
						<label className={classes.formSection}>
							Username:
							<input
								onChange={onChange}
								value={registerFormValues.username}
								type='text'
								name='username'
							/>
						</label>
						{/* 🎒 PASSWORD */}
						{/* test */}
						<label className={classes.formSection}>
							Password:
							<input
								onChange={onChange}
								value={registerFormValues.password}
								type='password'
								name='password'
							/>
						</label>
						{/* 🎒 FIRST NAME */}
						<label className={classes.formSection}>
							First Name:
							<input
								onChange={onChange}
								value={registerFormValues.first_name}
								type='text'
								name='first_name'
							/>
						</label>
						{/* 🎒 LAST NAME */}
						<label className={classes.formSection}>
							Last Name:
							<input
								onChange={onChange}
								value={registerFormValues.last_name}
								type='text'
								name='last_name'
							/>
						</label>
						{/* 🎒 EMAIL */}
						<label className={classes.formSection}>
							Email:
							<input
								onChange={onChange}
								value={registerFormValues.email}
								type='email'
								name='email'
							/>
						</label>
						{/* 🎒 VALIDATION ERRORS */}
						<div className='errors'>
							<div>{registerFormErrors.username}</div>
							<div>{registerFormErrors.password}</div>
							<div>{registerFormErrors.first_name}</div>
							<div>{registerFormErrors.last_name}</div>
							<div>{registerFormErrors.email}</div>
						</div>
						{/* 🎒 SUBMIT */}
						<button className={classes.submit} disabled={disabledSubmitButton}>
							Register
						</button>
					</form>
				</CardContent>
			</Card>
		</Container>
	);
}
