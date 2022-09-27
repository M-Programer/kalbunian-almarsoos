import { useState } from 'react';

const SimpleInput = props => {
	const [enteredName, setEnteredName] = useState('');
	const [enteredNameTouched, setEnteredNameTouched] = useState(false);
	
	const [email, setEmail] = useState('');
	const [emailTouched, setEmailTouched] = useState(false);

	const enteredNameIsValid = enteredName.trim() !== '';
	const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

	const isEmailValid = email.trim().match(/[A-Za-z0-9]*@[A-Za-z0-9]*\..../)
	const isEmailInvalid = !isEmailValid && emailTouched

	let formIsValid = false;

	if (enteredNameIsValid && isEmailValid) {
		formIsValid = true;
	}

	const nameInputChangeHandler = event => {
		setEnteredName(event.target.value);
	};

	const nameInputBlurHandler = event => {
		setEnteredNameTouched(true);
	};

	const emailChangeHandler = event => {
		setEmail(event.target.value);
	};

	const emailBlurHandler = event => {
		setEmailTouched(true);
	};

	const formSubmissionHandler = event => {
		event.preventDefault();

		setEnteredNameTouched(true);

		if (!enteredNameIsValid || !isEmailValid) {
			return;
		}

		console.log(enteredName);

		// nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
		setEnteredName('');
		setEnteredNameTouched(false);
	};

	const nameInputClasses = nameInputIsInvalid || isEmailInvalid
		? 'form-control invalid'
		: 'form-control';

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor='name'>Your Name</label>
				<input
					type='text'
					id='name'
					onChange={nameInputChangeHandler}
					onBlur={nameInputBlurHandler}
					value={enteredName}
				/>
				<input type="text" id="email" />
				{isEmailInvalid && (
					<p className='error-text'>Invalid email.</p>
				)}
				{nameInputIsInvalid && (
					<p className='error-text'>Name must not be empty.</p>
				)}
			</div>
			<div className='form-actions'>
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
