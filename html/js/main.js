$(function () {
    $('.tnb-sch a').on('click', function () {
        $('.tnb-sch .tnb-sch-bg, .tnb-sch .tnb-sch-close').show();
        /*$('.tnb-sch a').hide();*/
    })
    $('.tnb-sch .tnb-sch-close').on('click', function () {
        $('.tnb-sch a').show();
        $('.tnb-sch .tnb-sch-bg, .tnb-sch .tnb-sch-close').hide();  
    })
    
    $('.info-noticeWrap h4').on('click', function () {
        $('.info-noticeWrap ul').hide();
        $(this).next().show();
    })
    $('.info-noticeWrap h4').on('click', function () {
        $('.info-noticeWrap h4').removeClass();
        $(this).addClass('on');
    })

    $('.act-exper>li').on('click', function () {
        $(this).find('em, ul, div').show();
        $(this).siblings('li').find('ul, div').hide();
    })
    $('.act-exper>li').on('click', function () {
        $('.act-exper>li').removeClass();
        $(this).addClass('on');
    })
})