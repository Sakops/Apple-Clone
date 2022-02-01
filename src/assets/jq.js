import $ from 'jquery'
$(document).ready(function(){
    $('.button-template button').click(function(){
        $('.button-template button').removeClass('active')
        $(this).addClass('active');
    });
});