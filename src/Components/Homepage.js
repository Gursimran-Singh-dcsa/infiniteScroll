import {useSelector, useDispatch} from 'react-redux';
import {isLoggedIn} from '../Functions/common'
import LoginTemplate from './loginTemplate';
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
    return <div>You are logged in {currentState.user.name}<LoginButton/></div>
  } else {
    return <div className="notLoggedIn"><div>Please Login first</div><LoginTemplate /></div>
  }
}

export default Homepage;