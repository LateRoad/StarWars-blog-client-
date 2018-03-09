define(['jquery', 'cookie', 'logic/sendBlog'], function ($, Cookie, sendBlogRequest) {

    $(document).ready(function () {
        $('#createPostButton').click(function () {
            sendBlogRequest(getJson(), successCreating)
        })
    });

    function getJson() {
        return JSON.stringify({
            "title": $('#titleField').val(),
            "author": Cookie.getJSON('user').login,
            "description": $('#descriptionField').val(),
            "imageUrl": $('#urlField').val(),
            "tags": $('#tagsField').val().split(", ").map(function (elem) {
                return {"name": elem}
            })
        })
    }

    function successCreating(post) {
        console.log(post);
    }

});
