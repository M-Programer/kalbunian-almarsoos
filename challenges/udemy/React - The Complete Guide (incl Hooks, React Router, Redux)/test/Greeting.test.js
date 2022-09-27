import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('<Greeting />', () => {
	test('Have correct content before button click', () => {
		render(<Greeting/>)
		expect(screen.getByText(/It's good to see you!/i, {exact: false})).toBeInTheDocument()
	})
})