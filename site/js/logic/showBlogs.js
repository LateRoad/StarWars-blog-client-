define(['jquery', 'logic/getBlogs', 'template', 'mustache'], function ($, getBlogsRequest, template, Mustache) {

    getBlogsRequest(successLoadingBlogs);

    function successLoadingBlogs(blogs) {
       console.log(blogs);
       blogs.forEach(function(blog) {
         var data = {
             title: blog.title,
             author: blog.author,
             description: blog.description,
             date: getDate(new Date(blog.created)),
             tags: blog.tags.map(function(obj) { return obj.name }).join(", "),
             imageUrl: blog.imageUrl
         };
         var html = Mustache.to_html(template.blog, data);
         $(".blog-left").append(html);
       })
    }

    function getDate(date) {
      return date.getHours() + ":" + getMinutes(date.getMinutes()) + ", " + date.getDate() + " " + monthNames[date.getMonth()] + ", " + date.getFullYear();
    }

    function getMinutes(number) {
      return number / 10 < 1 ? "0" + number : number;
    }
});

var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
