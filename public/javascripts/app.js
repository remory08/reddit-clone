var app = angular.module("redditClone", ['angularMoment', 'ngAnimate', 'firebase']);

// TODO: We should have articles AND comments controllers

app.controller("articles", ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
  var postsRef = new Firebase("https://ryne-redditclone.firebaseio.com/posts");
  $scope.posts = $firebaseArray(postsRef);
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
      post.date = new Date()
      post.date = post.date.toString()
      console.log(post.date)
      $scope.posts.$add(post)
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
    // TODO: refactor to use boolean
    // $scope.form = !$scope.form
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
    if (this.newComForm ===0) {
      this.newComForm = 1;
    }
    else {
      this.newComForm = 0;
    }
  }

  $scope.addComment = function (post) {
    if (post.comments === undefined) {
      post.comments = [];
    }
    if (this.cauthor && this.message) {
      var comment = {}
      comment.cauthor = this.cauthor;
      comment.message = this.message;
      post.comments.push(comment)
      $scope.posts.$save(post)
      this.newComForm = 0;
      this.cauthor = "";
      this.message = "";
      this.commentsBox = 0;
    }
  }

  $scope.upVote = function (post) {
    post.votes ++;
    $scope.posts.$save(post);
  }

  $scope.downVote = function (post) {
    post.votes --;
    $scope.posts.$save(post);
  }
}])
