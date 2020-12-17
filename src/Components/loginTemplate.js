import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {userInputFields} from '../data';

const LoginTemplate = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    dob: '',
    image: '',
    accepted: false,
  });

  const [errors, setError] = useState({
    name: false,
    email: false,
    dob: false,
    image: false,
    accepted: false
  });

  const [errorMessages, setErrorMessages] = useState({
    name: '',
    email: '',
    dob: '',
    image: '',
    accepted: ''
  })

  const dispatch = useDispatch();

  const checkField = (e) => {
    const type = e.target.name;
    const value = (e.target.value).trim();
    const isValid = validate({type: type, value: value})
    setError({...errors, [e.target.name]: !isValid})
  }

  const setUserState = (e) => {
    switch (e.target.name) {
      case 'name':
      case 'email':
      case 'dob':
        setUserData({...userData, [e.target.name]: e.target.value})
        break;
      case 'accepted':
        setUserData({...userData, [e.target.name]: !userData[e.target.name]});
      default:
        break;
    }
  }

const validate = ({type, value}) => {
    switch (type) {
      case 'dob':
        const inputDate = new Date(value);
        const today = new Date();
        const minDate = new Date('01-01-1900');
        if ("" == value || inputDate > today || inputDate < minDate) {
          setErrorMessages({...errorMessages, [type]: 'please choose a valid date between 01/01/1900 & today'});
          return false;
        }
        setErrorMessages({...errorMessages, [type]: ''});
        return true;
      case 'name':
        if (null == value) {
          setErrorMessages({...errorMessages, [type]: 'name cannot be empty'});
          return false;
        }
        if (3 > value.length) {
          setErrorMessages({...errorMessages, [type]: 'name must be larger than 3 chars'});
          return false;
        }
        if (15 < value.length) {
          setErrorMessages({...errorMessages, [type]: 'name must be less than 15 chars'})
          return false;
        }
        if (!(/^[A-Za-z\s]+$/.test(value))) {
          setErrorMessages({...errorMessages, [type]: 'Please enter a valid name'})
          return false;
        }
        return true;
      case 'email':
        if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(value)) {
          setErrorMessages({...errorMessages, [type]: 'please Enter a valid email address'});
          return false;
        }
        return true;
      case 'accepted': 
        if (!value) {
          setErrorMessages({...errorMessages, [type]: 'please accept Terms and Conditions'});
          return false;
        }
        return true;
    }
    return true;
  }

  const submitData = () => {
    let isFormValid = true;
    userInputFields.forEach(userInputField => {
      isFormValid = isFormValid && validate({type:userInputField.name, value: userData[userInputField.name]});
    });
    if (!isFormValid) {
      console.log('there is some error bro');
    } else {
      dispatch({type: 'registerUser', value: userData});
    }
  }

  return (
    <div className="userProfileForm">
      {
        userInputFields.map((userInputField) => {
          if ('date' === userInputField.type) {
            return(
              <div className="input" key={userInputField.name}>
                <div className="placeholder">{userInputField.placeHolder}</div>
                <div className="input">
                  <input type={userInputField.type} name={userInputField.name} min={userInputField.min} max={userInputField.max} value={userData.[userInputField.name]} onChange={setUserState} onBlur={checkField} ></input>
                </div>
                <div className="errors"><span>{errors[userInputField.name] ? errorMessages[userInputField.name] : ''}</span></div>
              </div>
            )
          } else if ('checkbox' == userInputField.type) {
            return (
              <div className="input" key={userInputField.name}>
                <div className="placeholder">{userInputField.placeHolder}</div>
                <div className="input">
                  <input className="checkbox" type={userInputField.type} name={userInputField.name} defaultChecked={userData[userInputField.name]} onChange={setUserState} ></input>
                </div>
                <div className="errors"><span>{errors[userInputField.name] ? errorMessages[userInputField.name] : ''}</span></div>
              </div>
            )
          } else {
            return (
              <div className="input" key={userInputField.name}>
                <div className="placeholder"><span>{userInputField.placeHolder}</span></div>
                <div className="input"><input type={userInputField.type} placeholder={userInputField.placeHolder} name={userInputField.name} value={userData.[userInputField.name]} onChange={setUserState} onBlur={checkField}></input></div>
                <div className="errors"><span>{errors[userInputField.name] ? errorMessages[userInputField.name] : ''}</span></div>
              </div>
            )
          }
        })
      }
      <input type="submit" onClick={submitData}></input>
    </div>
  )
}

export default LoginTemplate;
