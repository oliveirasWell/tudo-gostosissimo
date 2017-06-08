var feedSubscription;

// Handle for launch screen possibly dismissed from app-body.js
dataReadyHold = null;

Router.configure({
  layoutTemplate: 'appBody',
  notFoundTemplate: 'notFound'
});

if (Meteor.isClient) {
  dataReadyHold = LaunchScreen.hold();
}

HomeController = RouteController.extend({
  onBeforeAction: function () {
  }
});

RecipesController = RouteController.extend({
  data: function () {
    return _.values(RecipesData);
  }
});

RecipeController = RouteController.extend({
  onBeforeAction: function () {
    Meteor.subscribe('recipe', this.params.name);
  },
  data: function () {
    return RecipesData[this.params.name];
  }
});

Router.route('home', {
  path: '/'
});


Router.route('recipes');

Router.route('new-recipe');

Router.route('recipe', {
  path: '/recipes/:name'
});

Router.onBeforeAction('dataNotFound', {
  only: 'recipe'
});
