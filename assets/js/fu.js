$(function(){
    $('.navbar').after('<div id="dropdown-menu" class="container"></div>');
    $('#dropdown-menu').append('<div class="collapse navbar-collapse"></div>');
    $('.navbar-collapse').append('<div class="scroll"></div>');
    $('.scroll').append($('.navbar-nav').clone(true));
    $('#nav-menu .scroll>ul>li>ul').hide();
    $('.navbar>div>.navbar-collapse').remove();
    $('.caret').click(function(){
        var visible = $(this).parent().next().is(":hidden");
});