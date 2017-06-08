ingredientsList = [];
directionsList = [];

Template.recipenew.onCreated(function () {
    this.ingredients = new ReactiveVar();
    this.directions = new ReactiveVar();
});

Template.recipenew.helpers({
    ingredients(){
        return Template.instance().ingredients.get();
    },
    directions(){
        return Template.instance().directions.get();
    }
});


Template.recipenew.events({
    'click .js-add-directions': () => {
        event.preventDefault();
        directionsList.push($('.js-add-directions-input').val());
        $('.js-add-directions-input').val(' ');
        Template.instance().directions.set(directionsList);

    },
    'click .js-add-ingredients': () => {
        event.preventDefault();
        ingredientsList.push($('.js-add-ingredients-input').val());

        $('.js-add-ingredients-input').val(' ');
        Template.instance().ingredients.set(ingredientsList);
    },
});
