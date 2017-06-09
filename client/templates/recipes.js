Template.recipes.onCreated(function () {
    this.searchedRecipes = ReactiveVar();
});

Template.recipes.onRendered(function () {
    $('.list-recipes').hide();
    $('.js-no-result').hide();
});

Template.recipes.helpers({
    searchedRecipes() {
        return Template.instance().searchedRecipes.get();
    },
});

Template.recipes.events({
    'click .btn-primary': function (event) {

        event.preventDefault();

        let $list = $('.list-recipes');
        let $noResultDiv = $('.js-no-result');
        let searChedValue = $('.js-recipe-name').val();

        let resultList = _.values(RecipesData).filter(
            obj => {
                return obj.title.toUpperCase().includes(searChedValue.toUpperCase());
            }
        );

        if (searChedValue === "" || searChedValue === " " || searChedValue === ' '  ||  !resultList.length) {
            $noResultDiv.show();
            $list.hide();
            return;
        }

        Template.instance().searchedRecipes.set(resultList);

        $list.show();
        $noResultDiv.hide();
    }
});
