var app = angular.module("redditClone", []);
app.controller("articles", function($scope) {
  $scope.posts = [];
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
      // var rightNow = new Date()
      // rightNow = Date.parse(rightNow)
      // var difference = rightNow - post.date;
      // console.log(rightNow)
      // console.log(post.date)
      // post.date = Math.floor(difference/85400000);

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
      console.log(comments);
      this.newComForm = 0;
      this.cauthor = "";
      this.message = "";
      this.commentsBox = 0;
    }
  }

  $scope.upVote = function (post) {
    post.votes ++;
    console.log(post)
    $scope.votes = post.votes
    ;
  }

  $scope.downVote = function (post) {
    post.votes --;
    console.log(post);
    $scope.votes = post.votes
    ;
  }
})
