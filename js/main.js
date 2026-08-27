let aboutOffset = $('#About').offset().top; 
$(window).scroll(function (){
    let wScroll = $(window).scrollTop();
    if (wScroll > aboutOffset - 70 ){
        $('#main-nav').css('backgroundColor' , 'rgba(0,0,0,0.8)');
        $('#main-nav').css('padding' , '10px 90px');
        $('#btnUp').fadeIn(500);
    }
    else
    {
        $('#main-nav').css('backgroundColor' , 'transparent');
        $('#main-nav').css('padding' , '10px 0px');
        $('#btnUp').fadeOut(500);
    }
})


$('#btnUp').click(function(){
    $('html,body').animate({scrollTop: 0},  500 )
})



$("a[href ^='#'] ").click((e)=>{
    $(e.target).css("border-bottom","solid 2px #fff")
    $(e.target).parent().siblings().children().css("border-bottom","none")
    let linkHref = $(e.target).attr('href');
    let sectionOffset = $(linkHref).offset().top;
    // $('html , body ').animate({scrollTop:sectionOffset},1000)
})


AOS.init({
    duration: 1000, 
    once: false      
});

let myTabs = document.querySelectorAll('button[data-bs-toggle="pill"]');
myTabs.forEach(function(tab) {
    tab.addEventListener('shown.bs.tab', function () {
    setTimeout(function() {
        AOS.refresh();
        }, 150);   
    });
});