var baseUrl = "http://localhost:3333";
var apiVersion = "/api";

var url = baseUrl + apiVersion;

define(['jquery'], function ($) {
    return function(successHandler) {
       return $.get(url + '/posts')
               .done(successHandler);
    }
});
