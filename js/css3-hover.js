/**
 * Created by StarLikeRain on 25/12/2016.
 */
let Ele_text = $('#test');
let Ele_banner = $('#banner');

Ele_text.on('mousemove', function (e) {

    let offset = Ele_text.offset();

    // 鼠标偏移
    let x = e.pageX - offset.left;
    let y = e.pageY - offset.top;

    // 中间点位
    let centerX = Ele_text.outerWidth() / 2; //877.5
    let centerY = Ele_text.outerHeight() / 2; //250

    // 距中鼠标偏移 " + - "
    let deltaX = x - centerX;
    let deltaY = y - centerY;

    let percentX = deltaX / centerX;
    let percentY = deltaY / centerY;

    let deg = 10;

    Ele_banner.css({
        transform: 'rotateX(' + deg * -percentY + 'deg)' +
        ' rotateY(' + deg * percentX + 'deg)' +
        'translate3d(0,0,50px  )'
    })m
});

Ele_text.on('mouseleave', function () {
    Ele_banner.css({
        transform: ''
    })
});