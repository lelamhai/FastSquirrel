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
});