$(document).ready(function(){
    // Menu mobile
    $(".menu-open").click(function(){
        $(".wrap-header").removeClass( "not-showmenu" );
    });

    $(".menu-close").click(function(){
        $(".wrap-header").addClass("not-showmenu");
    });

    // Chat live support
    $( ".menu-toggle" ).click(function() {
        $(".menu-toggle").toggleClass('open');
        $(".menu-round").toggleClass('open');
     });

     // Favourite
    $('.box a').click(function (e) {
        let text = $(event.target).attr('class');
        if(text)
        {
           let listClass = text.split(" ");
           if(listClass[0] === "favourite")
           {
              $(e.target).toggleClass("icon-minus"); 
              return false;
           }
        }
    });
});