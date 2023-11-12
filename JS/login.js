function valiDate() {
  // alert("Date")
  let inputEmail = document.getElementById("text").value;
   let inputPassword = document.getElementById("psw").value;
let confirmEmail = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+).([a-z]+)(.[a-z]+)?$/
   let confirmPsw = /^([a-zA-Z0-9])/

   if (!inputEmail && !inputPassword) {
      alert('enter password and confirmEmail')
    } else if (inputEmail.match(confirmEmail) && inputPassword.match(confirmPsw)) {
    alert('confirmEmail')
     
    return true;
  }else {
      alert('incorrect')
      return false;
  }
}