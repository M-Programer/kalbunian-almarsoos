import Counter from './components/Counter';
import Header from './components/Header'
import Auth from './components/Auth'
import UserProfile from './components/UserProfile'

import { useSelector, useDispatch } from 'react-redux';
import { authActions } from './store/index';


function App() {
	const isAuth = useSelector(state => state.auth.isAuth)
	return (
		<>
			<Header />
			{isAuth ? <UserProfile /> : <Auth />}
			<Counter />
		</>
	);
}

export default App;
