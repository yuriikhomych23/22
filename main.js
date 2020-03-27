// $(function() {

    // $('#show').click(function (e) {
        
    //     $('.box').show(); // доступаємось до show

    // });

    // $('#hide').click(function (e) {
    //     $('.box').hide();
    // });

    // $('#toggle').click(function (e) {
    //     $('.box').toggle();
    // });


    //FADE..................
    // $('#show').click(function (e) {
    //     $('.box').fadeIn(1000); // має часовий параметр , працюватимені протягом 1 секунди
    // });


    // $('#hide').click(function (e) {
    //      $('.box').fadeOut(1000); // має часовий параметр , працюватимені протягом 1 секунди        
    // });


    // $('#toggle').click(function (e) { 
    //     $('.box').fadeToggle(1000); // має часовий параметр , працюватимені протягом 1 секунди    
    // });



    // $('#show').click(function (e) {
    //     $('.box').slideDown(600); // має часовий параметр та callback
    // });




    //SLIDE.....................
    // $('#hide').click(function (e) {
    //     $('.box').slideUp(600); // показує box згори донизу 
    // });

    // $('#toggle').click(function (e) {
    //     $('.box').slideToggle(1000); // має часовий параметр , працюватимені протягом 1 секунди
    // });


    // $('#show').click(function (e) {
    //     $('.box').slideDown(1000, function () {
    //         $(this).css({
    //             backgroundColor: 'lightgreen',
    //             boxShadow: '4px 4px 15px lightgreen' 
    //         });
    //     }); 
    // });



//ANIMATION
    // $('#show').click(function (e) {

    //     $('.box').fadeIn().animate({
    //         width: '300px',
    //         height: '300px'
    //     }, 1000).animate({
    //         width: '150px',
    //         height: '150px'
    //     }, 1000, function() {
    //         $(this).hide()
    //     })
    // });




    //TASK
    // $('.box').click( function (e) {
    //     let modal = $('.modal');

    //     modal.css('top', (window.innerHeight - modalHeight())/2);
    //     modal.css('left', (window.innerWidth - modalWidth())/2);
    //     modal.css('background-color', $(this).css('background-color'));

    //     modal.slideDown(1000);
    // });

    // $('.modal').click(function() {
    //     $(this).slideUp(1000);
    // });



    //EACH

    // $('input').each(function (ind, elem) {
    //     // console.log(ind);
    //     // console.log(elem);
    //     $(elem).change(function () {
    //         let data = $(this).val();
    //         // console.log(data);
    //         $('p+span').eq(ind).html(data); //  p + span доступ до сусідньго елемента 
    //         $('p').eq(ind).animate({
    //             width: data*10 + 'px'
    //         }, 1000)
    //     });
    // });



    // події екрану scroll resize 

    // $(window).scroll(function () {
    //     console.log(window.scrollY) // показує наскільки ми проскролили сторінку по y

    // })

    // $(window).scroll(function () {
    //     console.log(window.innerWidth) // показує наскільки ми проскролили сторінку по x
        
    // })
    
    // $(window).trigger('scroll').trigger('resize')



    // on працює схоже до addEventListener , можемо використати декільки подій до одніє функції
    // $(window).on('scroll resize click', function (){
    //     console.log('work')
    // });



    //розбиваєм по полочкам 
    // $(window).on({
    //     resize: function () {
    //         console.log('resize');
    //     }, 
    //     scroll: function () {
    //         console.log('scroll');
    //     }
    // });



    //ONE спрацює одноразово якись функціонал
    // $(window).one({
    //     resize: function () {
    //         console.log('resize');
    //     }, 
    //     scroll: function () {
    //         console.log('scroll');
    //     }
    // });


    // //OFF ВІДКЛЮЧИ RESIZE
    // $(window).off('resize');


// })







