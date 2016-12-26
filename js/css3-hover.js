/**
 * Created by StarLikeRain on 25/12/2016.
 */
$('#test').on('mousemove', function (e) {

    var offset = $('#test').offset()

    // 鼠标偏移
    var x = e.pageX - offset.left
    var y = e.pageY - offset.top

    // 中间点位
    var centerX = $('#test').outerWidth() / 2 //877.5
    var centerY = $('#test').outerHeight() / 2 //250

    // 距中鼠标偏移 " + - "
    var deltaX = x - centerX
    var deltaY = y - centerY

    var percentX = deltaX / centerX
    var percentY = deltaY / centerY

    var deg = 10

    $('#banner').css({
        transform: 'rotateX(' + deg * -percentY + 'deg)' +
        ' rotateY(' + deg * percentX + 'deg)' +
        'translate3d(0,0,50px  )'
    })
})

$('#test').on('mouseleave', function () {
    $('#banner').css({
        transform: ''
    })
})