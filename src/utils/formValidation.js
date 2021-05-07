//CHECKS IF INPUT FIELD IS EMPTY -------> RETURNS TRUE IF FIELD IS EMPTY
export function isEmptyField(name) {
    return name.trim() === "";
  }
  
  //CHECK IF EMAIL PASSES REGEX TEST---> RETURNS TRUE IF EMAIL MATCHES PATTERN
  export function acceptedEmail(email) {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  }
 
  
  export function isNumber(value) {
    return /^\d+$/.test(value);
  }