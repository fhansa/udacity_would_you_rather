import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../actions/users';
import { NavLink } from 'react-router-dom';

export default function NavMenu(props) {

  const user = useSelector(state => state.loginUser && state.users[state.loginUser.id]);
  const loggedIn = user !== undefined;
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    dispatch(logoutUser());
  }

  return (
    <div className="navigation-bar">
      <div className="navigation-left">
        <NavLink to="/">Home</NavLink>
        { loggedIn && <NavLink to="/add">New Question</NavLink> }
        { loggedIn && <NavLink to="/leaderboard">Leaderboard</NavLink> }
      </div>
      <div className="navigation-right">
        { loggedIn && 
          <span>
            <span className="navigation-loggedin-user">{user.name}</span>
            <NavLink to="/" onClick={handleLogout}>Logout</NavLink> 
          </span>
        }
        { !loggedIn && <NavLink to="/login">Login</NavLink>}
      </div>
    </div>
  )
}

