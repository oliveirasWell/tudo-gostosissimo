let pesquisa = false;

Template.recipes.onCreated(function() {

});

Template.recipes.onRendered(function () {
    $('.list-recipes').hide();
    $('.js-no-result').hide();
});

Template.recipes.helpers({

});

Template.recipes.events({
    'click .btn-primary': function(event) {
        event.preventDefault();
        let $list = $('.list-recipes');

        pesquisa = !pesquisa;

        if($('.js-recipe-name').val() == 'Arroz' ){
            $('.js-no-result').show();
            $list.hide();
            return;
        }
        $list.show();
    }
});
