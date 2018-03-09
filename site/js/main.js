requirejs.config({
    baseUrl: 'js',
    paths: {
        'template': '../template/template',
        'bootstrap': 'lib/bootstrap',
        'jquery': 'lib/jquery-2.2.3.min',
        'cookie': 'lib/js.cookie',
        'mustache': 'lib/mustache'
    }
});

require(['logic/showBlogs', 'logic/createBlog', 'logic/signIn', 'logic/signUp', 'logic/showUser']);
