$('.faq-item li').on('click', function(){
    $(this).toggleClass('active').find('.faq-item-body').slideToggle();
    $(this).find('.faq-item-title img').toggleClass('active');
})