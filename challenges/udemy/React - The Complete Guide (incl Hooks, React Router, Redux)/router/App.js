import { Route, Redirect, Switch } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';

function App() {
	return (
		<div>
			<Switch>
				<Route to='/' exact>
					<Redirect to='/quotes' />
				</Route>
				<Route to='/quotes' exact>
					<AllQuotes />
				</Route>
				<Route to='/quotes/:qid' exact>
					<QuoteDetail />
				</Route>
				<Route to='/new-qoute'>
					<NewQuote />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
