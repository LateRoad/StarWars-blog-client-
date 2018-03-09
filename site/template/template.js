define({
    blog: '<div class="blog-left-grid">' +
    '<div class="blog-left-grid-left">' +
    '<h3>{{title}}</h3>' +
    '<p>by <span>{{author}}</span> | {{date}} | <span>{{tags}}</span></p>' +
    '</div>' +
    '<div class="clearfix"> </div>' +
    '<img src="{{imageUrl}}" alt=" " class="img-responsive" />' +
    '<p class="para">{{description}}</p>' +
    '</div>',

    notRegisteredUser: '<ul>' +
    '<li><a href="login.html">Sign In </a>/</li>' +
    '<li><a href="register.html">Register</a></li>' +
    '</ul>',

    registeredUser: '<ul>' +
    '<li><p style="color: white" id="usernameLabel">{{username}}</p></li>' +
    '</ul>' +
    '<ul>' +
    '<li><a id="logoutButton" href="">Log Out</a></li>',

    createButton: '<a href="post-creation.html" class="hvr-bounce-to-bottom non">Create post</a>'
});
