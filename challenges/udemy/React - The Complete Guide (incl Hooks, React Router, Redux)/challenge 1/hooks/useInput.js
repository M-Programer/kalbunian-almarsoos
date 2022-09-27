import { useState } from 'react'
export default function useInput(validate) {
	const [value, setValue] = useState('')
	const [touched, setTouched] = useState(false)
	return {
		value,
		valid: validate(value) && touched,
		onChange(e) {
			setValue(e.target.value)
		},
		onBlur(e) {
			setTouched(true)
		},
		reset() {
			setValue('')
			setTouched(false)
		},
	}
}