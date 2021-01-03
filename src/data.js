var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
export const userInputFields = [
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
    "name": "password",
    "type": "password",
    "placeHolder": "please enter your password"
  },
  {
    "name": "confirmPassword",
    "type": "password",
    "placeHolder": "please reenter your password"
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

