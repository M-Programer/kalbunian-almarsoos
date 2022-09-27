import useInput from "../hooks/useInput";
const SimpleInput = props => {
	const {value, valid, onChange, onBlur} = useInput(props.validate)
	const nameInputClasses = 'form-control ' + (!valid ? 'invalid' : '')
	valid && props.onValid()
	return (
		<div className={nameInputClasses}>
			<label htmlFor='name'>{props.label}</label>
			<input
				type='text'
				id='name'
				onChange={onChange}
				onBlur={onBlur}
				value={value}
			/>
			{!valid && (
				<p className='error-text'>{props.errorText}</p>
			)}
		</div>
	);
};

export default SimpleInput;
