import classes from './Header.module.css';
import { authActions } from '../store/index';
import { useSelector, useDispatch } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.auth.isAuth)
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={() => dispatch(authActions.logout())}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
