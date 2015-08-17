var app = angular.module("redditClone", ['angularMoment']);
app.controller("articles", function($scope) {
  $scope.posts = [
    {title: "A great tale",
      author: "Maya Angelou",
      imageURL: "https://unsplash.imgix.net/photo-1434145175661-472d90344c15?dpr=2&fit=crop&fm=jpg&h=800&q=75&w=1050",
      foo: "This is a great description of the great tale",
      newComForm: 0,
      commentsBox: 0,
      votes: 0,
      form: 0,
      date: new Date(),
      comments: []
    },
    {title: "Forever and a Day",
    author: "Ryne Emory",
    imageURL: "https://unsplash.imgix.net/photo-1433785567155-bf5530cab72c?dpr=2&fit=crop&fm=jpg&h=775&q=75&w=1050",
    foo: "What a great building with windows. Some are orange",
    newComForm: 0,
    commentsBox: 0,
    votes: 0,
    form: 0,
    date: new Date(),
    comments: []
    },
    {title: "What a wonderful world",
    author: "Your mom",
    imageURL: "https://unsplash.imgix.net/photo-1433256392503-913cee5877e3?dpr=2&fit=crop&fm=jpg&h=700&q=75&w=1050",
    foo: "Wonderful Wonderful",
    newComForm: 0,
    commentsBox: 0,
    votes: 0,
    form: 0,
    date: new Date(),
    comments: []
    }

  ];
  $scope.title = "";
  $scope.form= 0;
  $scope.author = "";
  $scope.imageURL = "";
  $scope.foo = "";
  $scope.cauthor = "";
  $scope.message = "";

  $scope.submit = function() {
    if ($scope.title && $scope.foo && $scope.author && $scope.imageURL) {
      var post = {}
      post.title = $scope.title
      post.foo = $scope.foo
      post.author = $scope.author
      post.imageURL = $scope.imageURL
      post.votes = 0;
      post.comments = [];
      post.date = new Date()
      $scope.posts.push(post)
      $scope.title = "";
      $scope.author = "";
      $scope.imageURL = "";
      this.newComForm = 0;
      this.commentsBox = 0;
      $scope.foo = "";
      $scope.form = 0;
    }
  }

  $scope.showForm = function () {
    if ($scope.form === 0) {
      $scope.form = 1;
    }
    else {
      $scope.form = 0;
    }
  }

  $scope.showComments = function () {
    if (this.commentsBox === 0) {
      this.commentsBox = 1;
    }
    else {
      this.commentsBox = 0;
    }
  }

  $scope.newComment = function () {
    console.log(this.newComForm);
    if (this.newComForm ===0) {
      this.newComForm = 1;
    }
    else {
      this.newComForm = 0;
    }
  }

  $scope.addComment = function (comments) {
    if (this.cauthor && this.message) {
      var comment = {}
      comment.cauthor = this.cauthor;
      comment.message = this.message;
      comments.push(comment)
      this.newComForm = 0;
      this.cauthor = "";
      this.message = "";
      this.commentsBox = 0;
    }
  }

  $scope.upVote = function (post) {
    post.votes ++;
    $scope.votes = post.votes
    ;
  }

  $scope.downVote = function (post) {
    post.votes --;
    $scope.votes = post.votes
    ;
  }
})
