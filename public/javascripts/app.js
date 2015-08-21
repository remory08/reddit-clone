var app = angular.module("redditClone", ['angularMoment', 'ngAnimate']);

// TODO: We should have articles AND comments controllers

app.controller("articles", function($scope) {
  $scope.posts = [
    {title: "A great tale",
      author: "Maya Angelou",
      imageURL: "https://unsplash.imgix.net/photo-1434145175661-472d90344c15?dpr=2&fit=crop&fm=jpg&h=800&q=75&w=1050",
      foo: "Schlitz farm-to-table sartorial ennui. Trust fund 3 wolf moon listicle, YOLO jean shorts roof party shabby chic biodiesel deep v. Salvia hoodie readymade, fingerstache four loko Intelligentsia pickled mixtape forage small batch gastropub chambray biodiesel American Apparel Austin. Brunch +1 fingerstache, XOXO keffiyeh post-ironic gluten-free health goth Etsy butcher American Apparel normcore lomo. Single-origin coffee PBR Bushwick, typewriter plaid McSweeney's health goth small batch keytar you probably haven't heard of them. Church-key viral salvia, chambray mumblecore Vice beard. Mixtape craft beer High Life pour-over, lumbersexual American Apparel hoodie Kickstarter Vice raw denim retro actually.",
      newComForm: 0,
      commentsBox: 0,
      votes: 10,
      form: 0,
      date:"Sun Aug 16 2015 17:34:09 GMT-0600 (MDT)",
      comments: []
    },
    {title: "Forever and a Day",
    author: "Ryne Emory",
    imageURL: "https://unsplash.imgix.net/photo-1433785567155-bf5530cab72c?dpr=2&fit=crop&fm=jpg&h=775&q=75&w=1050",
    foo: "Put a bird on it roof party slow-carb, Schlitz migas Portland try-hard Echo Park whatever. American Apparel pour-over scenester chillwave Truffaut try-hard. Flexitarian dreamcatcher art party, cornhole vegan DIY High Life. 8-bit 90's 3 wolf moon locavore bespoke. Polaroid farm-to-table Vice seitan, banh mi Echo Park distillery letterpress DIY church-key salvia sustainable Brooklyn direct trade vegan. Ethical tofu butcher Shoreditch authentic Vice, chillwave dreamcatcher hoodie semiotics lumbersexual. Selvage Neutra readymade forage, tousled distillery tilde scenester synth cronut fap twee cred chia chambray.",
    newComForm: 0,
    commentsBox: 0,
    votes: 5,
    form: 0,
    date: new Date(),
    comments: []
    },
    {title: "What a wonderful world",
    author: "Fred Armisen",
    imageURL: "https://unsplash.imgix.net/photo-1433256392503-913cee5877e3?dpr=2&fit=crop&fm=jpg&h=700&q=75&w=1050",
    foo: "Typewriter hoodie fanny pack jean shorts, flannel art party Brooklyn wayfarers butcher blog listicle small batch. Roof party cardigan cold-pressed scenester Godard retro, cred before they sold out Vice Neutra Echo Park drinking vinegar High Life. Tousled cardigan crucifix plaid. Yr cold-pressed Helvetica Portland, kale chips cray slow-carb flexitarian keytar 3 wolf moon. Small batch squid fanny pack tote bag direct trade. Chillwave keytar bitters, drinking vinegar mumblecore American Apparel wayfarers Kickstarter tousled Neutra literally before they sold out Marfa selvage. Disrupt craft beer mumblecore pug wayfarers pickled organic gastropub art party master cleanse.",
    newComForm: 0,
    commentsBox: 0,
    votes: -2,
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
      console.log(new Date())
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
  }

  $scope.downVote = function (post) {
    post.votes --;
  }
})
