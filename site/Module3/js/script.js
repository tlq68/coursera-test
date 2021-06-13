$(document).on('click', function (e){
    /* bootstrap collapse js adds "in" class to your collapsible element*/
    var menu_opened = $('#header-nav').hasClass('in');
  
    if(!$(e.target).closest('#header-nav').length &&
        !$(e.target).is('#header-nav') &&
        menu_opened === true){
            $('#header-nav').collapse('toggle');
    }

});