define(['jquery', 'cookie'], function ($, Cookie) {

  $(document).ready(function() {
    $('#signUpButton').click(function() {
      var validationMessage = validate();
      if (validationMessage == "OK") {
        registerUser();
      } else {
        alert(validationMessage);
      }
    })
  });

  function registerUser() {
    $.ajax({
                url: url + '/users/create',
                type: 'POST',
                data: getJson(),
                contentType: 'application/json',
                success: successSignUp
                // error: onError
          });
  }

  function validate() {
    if ($('#newUsernameField').val() == "") {
      return "Empty login field";
    } else if ($('#newPasswordField').val() == "") {
      return "Empty password field";
    } else if ($('#firstNameField').val() == "") {
      return "Empty first name field";
    } else if ($('#lastNameField').val() == "") {
      return "Empty last name field";
    } else if ($('#newUsernameField').val().length <= 3) {
      return "Wrong username, should be 4 letters and more"
    } else if ($('#newPasswordField').val() != $('#confirmPasswordField').val()) {
      return "Passwords don't match"
    } else {
      return "OK";
    }
  }

  function getJson() {
      return JSON.stringify({
        "firstName": $('#firstNameField').val(),
        "lastName": $('#lastNameField').val(),
        "login": $('#newUsernameField').val(),
        "password": $('#newPasswordField').val()
      })
  }

  function successSignUp(user) {
    alert("Success");
    Cookie.set('user', user.user, { expires: 10 });
    console.log(Cookie.getJSON('user').login);
    window.location.replace("index.html");
  }

  function onError(error) {
    console.log(error);
    alert(error.responseJSON.message);
  }

});
