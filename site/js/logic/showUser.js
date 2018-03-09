define(['jquery', 'cookie', 'template', 'mustache'], function ($, Cookie, template, Mustache) {

  if (Cookie.get('user') != undefined) {
    $('.createB').html(Mustache.to_html(template.createButton));
    var user = Cookie.getJSON('user');
    var data = {
        username: user.firstName + "  \"" + user.login + "\"  " + user.lastName,
    };
    $('.sign-in').html(Mustache.to_html(template.registeredUser, data));
  } else {
    $('.sign-in').html(Mustache.to_html(template.notRegisteredUser));
  }

  $(document).ready(function() {
    $('#logoutButton').click(function() {
      Cookie.remove('user');
    })
  })

});
