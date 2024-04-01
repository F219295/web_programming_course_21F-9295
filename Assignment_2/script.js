function toggleForm() {
    var authOption = document.getElementById("auth-option").value;
    var signupFields = document.getElementById("signup-fields");
    var signinFields = document.getElementById("signin-fields");
  
    if (authOption === "signup") {
      signupFields.style.display = "block";
      signinFields.style.display = "none";
    } else {
      signupFields.style.display = "none";
      signinFields.style.display = "block";
    }
  }
  
  function validateAuthForm() {
    var authOption = document.getElementById("auth-option").value;
  
    if (authOption === "signup") {
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
      var birthdate = document.getElementById("birthdate").value;
      var email = document.getElementById("email").value;
      var gender = document.getElementById("gender").value;
      var phone = document.getElementById("phone").value;
      var zipcode = document.getElementById("zipcode").value;
      var country = document.getElementById("country").value;
  
      if (!validateUsername(username) || !validatePassword(password) || !validateBirthdate(birthdate) || !validateEmail(email) || !validateGender(gender) || !validatePhone(phone) || !validateZipcode(zipcode) || !validateCountry(country)) {
        alert("Invalid input! Please check the highlighted fields.");
      } else {
        alert("Sign-up successful!");
      }
    } else {
      var signinUsername = document.getElementById("signin-username").value;
      var signinPassword = document.getElementById("signin-password").value;
  
      if (!validateUsername(signinUsername) || !validatePassword(signinPassword)) {
        alert("Invalid input! Please check the highlighted fields.");
      } else {
        alert("Sign-in successful!");
      }
    }
  }
  
  function validateUsername(username) {
    return username.length >= 3;
  }
  
  function validatePassword(password) {
    return password.length >= 6;
  }
  
  function validateBirthdate(birthdate) {
    return new Date(birthdate) <= new Date();
  }
  
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  function validateGender(gender) {
    return ['male', 'female', 'other'].includes(gender);
  }
  
  function validatePhone(phone) {
    return /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(phone);
  }
  
  function validateZipcode(zipcode) {
    return /^[0-9]{5}$/.test(zipcode);
  }
  
  function validateCountry(country) {
    return country.trim() !== '';
  }
  