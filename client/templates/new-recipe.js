ingredients = [];
directions = [];

Template.newRecipe.helpers({
    directions: () => {
        return directions;
    },
    ingredients: () => {
        return ingredients;
    }
});

Template.newRecipe.events({
    'click .js-add-directions': () => {
        event.preventDefault();
        ingredients.add($('js-add-directions-input').val());
    },
    'click .js-add-ingredients': () => {
        event.preventDefault();
        ingredients.add($('js-add-directions-input').val());
    },
});
