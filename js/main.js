var navBtn = $('#nav-btn');
var navUl = $('.nav ul');
var navUlLi = $('.nav ul li');

navBtn.on('click', function(){
    navUl.toggleClass('active');
});

navUlLi.on('click', function(){
    if(navUl.hasClass('active')){
        navUl.css({
            visibility: 'hidden'
        });
        
        navUl.removeClass('active');

        navUl.css({
            visibility: 'visible'
        });
    } 
});

