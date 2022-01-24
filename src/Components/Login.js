import {useState, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { loginUser } from '../actions/users';


export default function Login(props) {

  const userList = useSelector(state => state.users);
  const [selectedUser, setSelectedUser] = useState(null);
  const button = useRef();
  const navigate = useNavigate()

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedUser) {
      dispatch(loginUser(selectedUser))
      navigate("/")
    }
   }

  const handleSelectUser = e => {
    const userId = e.target.value;
    button.current.disabled = false;
    setSelectedUser(userId);
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <select onChange={handleSelectUser} defaultValue="empty">
          <option value="empty" disabled>select a user</option>
          {
            Object.keys(userList).map( userid => (
              <option key={userid} value={userid}>{userList[userid].name}</option>
            ))
          }
        </select>
        <button ref={button} type="submit" disabled>Login</button>
      </form>
    </div>
  )
}