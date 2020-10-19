import React, { useState, useEffect } from 'react';
import {
	Container,
	Card,
	CardContent,
	CardMedia,
	Typography,
} from '@material-ui/core';
import * as yup from 'yup';
import axios from 'axios';

const registerSchema = yup.object().shape({
	username: yup.string().required('Username is required'),
	password: yup.string().required('Password is required'),
	first_name: yup.string().required('First name is required'),
	last_name: yup.string().required('Last name is required'),
	email: yup.string().required('Email is required'),
	// .email() not sure about the regex yet
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

// 🎒
export default function Register() {
	// 🎒 State
	const [registerFormValues, setRegisterFormValues] = useState(
		initRegisterFormValues
	);
	const [registerFormErrors, setRegisterFormErrors] = useState(
		initRegisterFormErrors
	);
	const [users, setUsers] = useState({ setRegisterFormValues });
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
				setRegisterFormErrors({
					...registerFormErrors,
					[name]: err.registerFormErrors[0],
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

		axios
			.post('', newUser)
			.then((res) => {
				setUsers([...users, res.data]);
				setRegisterFormValues(initRegisterFormValues);
			})
			.catch((err) => {
				console.dir(err);
			});
	};

	// 🎒 I BELIEVE THIS IS WHERE THE ERROR IS
	// 🎒 use setErrors to set RegisterFormErrors
	const setErrors = (name, value) => {
		yup
			.reach(registerSchema, name)
			.validate(value)
			.then(() => setErrors({ ...registerFormErrors, [name]: ' ' }))
			.catch((err) =>
				setRegisterFormErrors({
					...registerFormErrors,
					[name]: err.registerFormErrors[0],
				})
			);
	};

	useEffect(() => {
		registerSchema.isValid(registerFormValues).then((valid) => {
			setDisabledSubmitButton(!valid);
		});
	}, [registerFormValues]);

	return (
		<Container>
			<Card>
				<CardContent>
					<Typography variant='h1' component='h1'>
						Expat Journal
					</Typography>
					<form submitRegisterForm={submitRegisterForm}>
						{/* 🎒 USERNAME */}
						<label>
							Username:
							<input
								onChange={onChange}
								value={registerFormValues.username}
								type='text'
								name='username'
							/>
						</label>
						{/* 🎒 PASSWORD */}
						<label>
							Password:
							<input
								onChange={onChange}
								value={registerFormValues.password}
								type='password'
								name='password'
							/>
						</label>
						{/* 🎒 FIRST NAME */}
						<label>
							First Name:
							<input
								onChange={onChange}
								value={registerFormValues.first_name}
								type='text'
								name='first_name'
							/>
						</label>
						{/* 🎒 LAST NAME */}
						<label>
							Last Name:
							<input
								onChange={onChange}
								value={registerFormValues.last_name}
								type='text'
								name='last_name'
							/>
						</label>
						{/* 🎒 EMAIL */}
						<label>
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
						<button disabledSubmitButton={disabledSubmitButton}>
							Register
						</button>
					</form>
				</CardContent>
			</Card>
		</Container>
	);
}
