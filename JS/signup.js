function valiDate() {
  // alert("Date")
  let inputEmail = document.getElementById("text").value;
   let inputPassword = document.getElementById("psw").value;
   let firstName = document.getElementById("fName").value;
   let lastName = document.getElementById("lName").value;
   let enter = document.getElementById("goto");
let confirmfName = /^([a-zA-Z])/
let condirmlName = /^([a-zA-Z])/
let confirmEmail = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+).([a-z]+)(.[a-z]+)?$/
   let confirmPsw = /^([a-zA-Z0-9])/

   if (!inputEmail && !inputPassword && !firstName && !lastName) {
      alert('enter password and confirmEmail')
    } else if (inputEmail.match(confirmEmail) && inputPassword.match(confirmPsw) && firstName.match(confirmfName) && lastName.match(condirmlName)) {
    alert('confirmEmail')
     
    return true;
  }else {
      alert('incorrect')
      return false;
  }
}