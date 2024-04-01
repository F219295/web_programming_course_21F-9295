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
    return /^[0-9]{11}$/.test(phone);
  }
  
  function validateZipcode(zipcode) {
    return /^[0-9]{5}$/.test(zipcode);
  }
  
  function validateCountry(country) {
    return country.trim() !== '';
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
  
      if (!validateUsername(username)) {
        alert("Invalid username! Please enter at least 3 characters.");
        return;
      }
  
      if (!validatePassword(password)) {
        alert("Invalid password! Please enter at least 6 characters.");
        return;
      }
  
      if (!validateBirthdate(birthdate)) {
        alert("Invalid birthdate! Please enter a valid date.");
        return;
      }
  
      if (!validateEmail(email)) {
        alert("Invalid email! Please enter a valid email address.");
        return;
      }
  
      if (!validateGender(gender)) {
        alert("Invalid gender! Please select 'male', 'female', or 'other'.");
        return;
      }
  
      if (!validatePhone(phone)) {
        alert("Invalid phone number! Please enter a valid phone number (e.g., 123-456-7890).");
        return;
      }
  
      if (!validateZipcode(zipcode)) {
        alert("Invalid zipcode! Please enter a 5-digit zipcode.");
        return;
      }
  
      if (!validateCountry(country)) {
        alert("Invalid country! Please enter a valid country name.");
        return;
      }
  
      alert("Sign-up successful!");
    } else {
      var signinUsername = document.getElementById("signin-username").value;
      var signinPassword = document.getElementById("signin-password").value;
  
      if (!validateUsername(signinUsername)) {
        alert("Invalid username! Please enter at least 3 characters.");
        return;
      }
  
      if (!validatePassword(signinPassword)) {
        alert("Invalid password! Please enter at least 6 characters.");
        return;
      }
  
      alert("Sign-in successful!");
    }
  }
  