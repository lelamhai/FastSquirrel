$(document).ready(function(){
    $(".menu-open").click(function(){
        $(".wrap-header").removeClass( "not-showmenu" );
    });

    $(".menu-close").click(function(){
        $(".wrap-header").addClass("not-showmenu");
    });
});