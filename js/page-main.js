/**
 * Created by StarLikeRain on 25/12/2016.
 */
let $nav_child_list = $('.nav-child-list');
let $nav_guide = $('#nav-guide');
let Interval_one;
let flag_one = false;
$nav_child_list.on('mouseenter', () => {
    $nav_child_list.closest('li').addClass('active');
}).on('mouseleave', () => {
    $nav_guide.children('li').removeClass('active');
})


let $header_content = $('.header-content');


$(function () {
    $(window).scrollTop(0);

    $('.header-content').css({'margin-top': 30, 'opacity': 1});

    $(window).on('scroll', () => {

        // window.timer = setTimeout(function () {
        //     console.log('1111');
        //     header_content_check();
        // }, 1000);
    })

    function header_content_check() {

    }

})