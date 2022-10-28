const form = document.querySelector("form"),
userField = form.querySelector(".username-field"),
userInput = userField.querySelector(".user"),
passField = form.querySelector(".password-field"),
passInput = form.querySelector(".password")


// Username Validation
function checkUser() {
   if(userInput.value.length == 0){
      return userField.classList.add("invalid"); // 
   }
   return userField.classList.remove("invalid");
}

// Password Validation
function passValidation(){
   const passPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

   if(!passInput.value.match(passPattern)){
     return  passField.classList.add("invalid");  //adding invalid class if password input value do not match with password patten
   }
   return  passField.classList.remove("invalid");  //removing invalid class if password input value is matched with password patten
}

// Calling function on Submit Button
form.addEventListener("submit", (e) => {
   e.preventDefault();  //preventing form submitting
   checkUser();
   passValidation();

   // calling function on key up
   userInput.addEventListener("keyup", checkUser);
   passInput.addEventListener("keyup", passValidation);

   if(
      !userField.classList.contains("invalid") &&
      !passField.classList.contains("invalid")
   ){
      location.href = form.getAttribute("action")
   }
});

