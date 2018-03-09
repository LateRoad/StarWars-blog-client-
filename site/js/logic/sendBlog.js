var baseUrl = "http://localhost:3333";
var apiVersion = "/api";

var url = baseUrl + apiVersion;

define(['jquery'], function ($) {
    return function (data, successHandler, errorHandler) {
        return $.ajax({
            url: url + '/posts',
            type: 'POST',
            data: data,
            contentType: 'application/json',
            success: successHandler
        });
    }
});
