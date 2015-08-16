var app = angular.module("redditClone", []);
app.controller("articles", function($scope) {
  $scope.posts = [];
  $scope.title = "";
  $scope.form= 0;
  $scope.author = "";
  $scope.imageURL = "";
  $scope.foo = "";

  $scope.submit = function() {
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
    $scope.foo = "";
    $scope.form = 0;
  }

  $scope.showForm = function () {
    if ($scope.form === 0) {
      $scope.form = 1;
      console.log($scope.form);
    }
    else {
      console.log($scope.form);
    }
  }

  $scope.upVote = function (votes) {
    votes ++;
    console.log(votes)
    ;

  }
})
