
define(['jquery', 'cookie'], function ($, Cookie) {

  $(document).ready(function() {
    $('#loginButton').click(function() {
        var validationMessage = validate();
        if (validationMessage == "OK") {
          sendUser();
        } else {
          alert(validationMessage);
        }
    })
  });

  function sendUser() {
    $.ajax({
                url: url + '/users/login',
                type: 'POST',
                data: getJson(),
                contentType: 'application/json',
                success: successSignIn,
                error: onError
          });
  }

  function validate() {
    if ($('#loginField').val() == "") {
      return "Empty login field";
    } else if ($('#passwordField').val() == "") {
      return "Empty password field";
    } else if ($('#loginField').val().length <= 3) {
      return "Wrong username, should be 4 letters and more"
    } else {
      return "OK";
    }
  }

  function getJson() {
      return JSON.stringify({
        "login": $('#loginField').val(),
        "password": $('#passwordField').val()
      })
  }

  function successSignIn(user) {
      alert("success");
    Cookie.set('user', user.user, { expires: 10 });
    console.log(Cookie.getJSON('user').login);
    window.location.replace("index.html");
  }

  function onError(error) {
    console.log(error);
    alert(error.responseJSON.message);
  }

});
