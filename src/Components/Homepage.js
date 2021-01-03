import {useSelector, useDispatch} from 'react-redux';
import {isLoggedIn} from '../Functions/common'
import RegistrationTemplate from './RegistrationTemplate';
const Homepage = () => {
  const currentState = useSelector((state) => state);
  const dispatch = useDispatch();
  const LoginButton = () => {
    return (
    <button onClick={changeState}>{isLoggedIn(currentState)? 'logout' : 'login'}</button>
    )
  }

  const changeState = () => {
    dispatch({type: 'loginButtonClicked'})
  }

  if (isLoggedIn(currentState)) {
    return <div>You are logged in {currentState.user.name} and your password is {currentState.user.password}<LoginButton/></div>
  } else {
    return <div className="notLoggedIn"><div>Please Login first</div><RegistrationTemplate /></div>
  }
}

export default Homepage;