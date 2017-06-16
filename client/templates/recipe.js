const TAB_KEY = 'recipeShowTab';

Template.recipe.onCreated(function() {
  if (Router.current().params.activityId)
    Template.recipe.setTab('feed');
  else
    Template.recipe.setTab('recipe');
});

Template.recipe.onRendered(function () {
  this.$('.recipe').touchwipe({
    wipeDown: function () {
      if (Session.equals(TAB_KEY, 'recipe'))
        Template.recipe.setTab('make')
    },
    preventDefaultEvents: false
  });
  this.$('.attribution-recipe').touchwipe({
    wipeUp: function () {
      if (! Session.equals(TAB_KEY, 'recipe'))
        Template.recipe.setTab('recipe')
    },
    preventDefaultEvents: false
  });
    Template.recipe.setTab('make')
});

// CSS transitions can't tell the difference between e.g. reaching
//   the "make" tab from the expanded state or the "feed" tab
//   so we need to help the transition out by attaching another
//   class that indicates if the feed tab should slide out of the
//   way smoothly, right away, or after the transition is over
Template.recipe.setTab = function(tab) {
  const lastTab = Session.get(TAB_KEY);
  Session.set(TAB_KEY, tab);
  
  const fromRecipe = (lastTab === 'recipe') && (tab !== 'recipe');
    let $feed = $('.feed-scrollable');
    $feed.toggleClass('instant', fromRecipe);

  const toRecipe = (lastTab !== 'recipe') && (tab === 'recipe');
  $feed.toggleClass('delayed', toRecipe);
};

Template.recipe.helpers({
  isActiveTab: function(name) {
    return Session.equals(TAB_KEY, name);
  },
  activeTabClass: function() {
    return Session.get(TAB_KEY);
  },
});

Template.recipe.events({
  'click .js-show-recipe': function(event) {
    event.stopPropagation();
    Template.recipe.setTab('make')
  },

  'click .js-show-feed': function(event) {
    event.stopPropagation();
    Template.recipe.setTab('feed')
  },

  'click .js-share': function() {
    Overlay.open('shareOverlay', this);
  },

  'click .btn-primary': function() {
      Template.recipe.setTab('make');
  }
});
