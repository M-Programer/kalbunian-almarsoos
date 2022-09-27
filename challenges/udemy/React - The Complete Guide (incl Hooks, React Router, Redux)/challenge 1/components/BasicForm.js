import SimpleInput from "./SimpleInput";

const BasicForm = props => {
	const [inputNo, setInputNo] = useState(3)
	const onValid = () => setInputNo(x => x-1)
	return (
		<form>
			<div className='control-group'>
				<SimpleInput label='First Name' errorText='Invalid name' validate={value => value.trim() !== ''} onValid={onValid} />
				<SimpleInput label='Last Name' errorText='Invalid name' validate={value => value.trim() !== ''} onValid={onValid} />
			</div>
			<SimpleInput label='E-Mail Address' errorText='Invalid email' validate={value => value.includes('@')} onValid={onValid} />
			<div className='form-actions'>
				{inputNo === 0 ? <button>Submit</button> : <button>Submit</button>}
			</div>
		</form>
	);
};

export default BasicForm;
