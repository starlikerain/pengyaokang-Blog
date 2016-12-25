/**
 * Created by StarLikeRain on 25/12/2016.
 */
let $nav_child_list = $('.nav-child-list');
let $nav_guide = $('#nav-guide');
$nav_child_list.on('mouseenter', () => {
    $nav_child_list.closest('li').addClass('active');
}).on('mouseleave', () => {
    $nav_guide.children('li').removeClass('active');
})

// $nav_guide.on('mouseenter', function (e) {
//
// })