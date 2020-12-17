import {useDispatch} from 'react-redux';
import {useState} from 'react';

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
  })
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  const userInputFields = [
    {
      "name": "name",
      "type": "text",
      "placeHolder": "please enter your name"
    },
    {
      "name": "email",
      "type": "email",
      "placeHolder": "please enter your email"
    },
    {
      "name": "dob",
      "type": "date",
      "placeHolder": "please enter your dae of birth",
      "min": "1900-01-01",
      "max": date
    },
    // {
    //   "name": "name",
    //   "type": "text"
    // },
    {
      "name": "accepted",
      "type": "checkbox",
      "placeHolder": "I agree terms and conditions"
    }
  ];
  const dispatch = useDispatch();

  const setUserState = (e) => {
    const type = e.target.name;
    const value = (e.target.value).trim();
    const isValid = validate({type: type, value: value})
    setError({...errors, [e.target.name]: isValid})
    switch (e.target.name) {
      case 'name':
      case 'email':
      case 'dob':
        setUserData({...userData, [e.target.name]: e.target.value})
        break;
      default:
        break;
    }
  }
  const validate = ({type, value}) => {
    switch (type) {
      case 'dob':
        const inputDate = new Date(value);
        const minDate = new Date('01-01-1900');
        return (inputDate > today || inputDate < minDate)
      case 'name':
        if (null == value || !(/^[A-Za-z\s]+$/.test(value)) || 3 > value.length || 15 < value.length) {
          return true;
        }
        return false;
      case 'email':
        if (null == value || !(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(value)) {
          return true;
        }
        return false;
    }
  }

  canSubmit = () => {
    const retVal = false;
    
  }
  return (
    <div className="userProfileForm">
      {
        userInputFields.map((userInputField) => {
          if ('date' === userInputField.type) {
            return(
              <div className="input">
                <div className="placeholder">{userInputField.placeHolder}</div>
                <div className="input">
                  <input type={userInputField.type} name={userInputField.name} min={userInputField.min} max={userInputField.max} value={userData.[userInputField.name]} onChange={setUserState} ></input>
                </div>
                <div className="errors">{errors[userInputField.name] ? <span>incorrect</span> : <span></span>}</div>
              </div>
            )
          } else if ('checkbox' == userInputField.type) {
            return (
              <div className="input">
                <div className="placeholder">{userInputField.placeHolder}</div>
                <div className="input">
                  <input className="checkbox" type={userInputField.type} name={userInputField.name} defaultChecked={userData[userInputField.name]} onChange={setUserState} ></input>
                </div>
                <div className="errors">{errors[userInputField.name] ? <span>please tick</span> : <span></span>}</div>
              </div>
            )
          } else {
            return (
              <div className="input">
                <div className="placeholder"><span>{userInputField.placeHolder}</span></div>
                <div className="input"><input type={userInputField.type} placeholder={userInputField.placeHolder} name={userInputField.name} value={userData.[userInputField.name]} onChange={setUserState}></input></div>
                <div className="errors">{errors[userInputField.name] ? <span>incorrect</span> : <span></span>}</div>
              </div>
            )
          }
        })
      }
      <input type="submit" {canSubmit() ?: disabled} ></input>
    </div>
  )
}

export default LoginTemplate;
