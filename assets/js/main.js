// ========== load screen ========== \\
function loadPage() {
    calculateModal();
}
// ========== resize screen ========== \\
function onResize () {
    calculateModal();
}

function calculateModal () {
    $(document).ready(function(){
        var head = parseFloat($("#header").height());
        var footer = parseFloat($("#footer").height());
        var headModal = parseFloat($(".modal-header").height());
        var hr = parseFloat($(".hr").outerHeight());
        var h = parseFloat($( window ).height());
        
        var wrapModal = h - (head + footer);
        var bodyModal = h - ( head + footer + headModal + hr + 15 );

        $(".modal-body").height(bodyModal);
        $(".wrap-modal").height(wrapModal);
    });
}

$(document).ready(function(){
    // ========== owl-carousel ========== \\
    $('.owl-carousel').owlCarousel({
        items: 6,
        dots: false,
        // mouseDrag: false,
        // touchDrag: false
    });

    // ========== favourite ========== \\
    $(".icon-plus").click(function(){
        $(this).toggleClass("icon-minus")  ; 
    })


    // ========== Item gallery ========== \\
    $(".item-gallery").click(function(event){
        if($(event.target).attr('class') != "noflip")
        {
            if($(this).hasClass( "flip" ))
            {
                $(this).removeClass("flip");
            } else {
                $(this).addClass("flip");
            }
        }
    });

    // ========== Popup ========== \\
    $(".item-carousel").click(function(){
        $('.wrap-body').css("display", "block");
    })

    $(".modal-close").click(function(){
        $('.wrap-body').css("display", "none");
        $('.item-carousel').removeClass( "fs-active" )
    })

    // ========== Menu ========== \\
    $(".item-carousel").click(function(){
        if(!$(this).hasClass( "fs-active" ))
        {
            $(this).addClass("fs-active");
        } 
    })


    
    // ========== Top =========== \\
    $(".modal-body").scroll(function (){
        var scroll = $(".modal-body").scrollTop();
        if (scroll > 60){
            $('.modal-top').css('display', 'block');
        } else {
            $('.modal-top').css('display', 'none');
        }

    });

    $("#button-top").click(function(){
        $(".modal-body").animate(
            {scrollTop: 0},
            500
        );
    });


});








// ========== draggale ========== \\
var draggable = $('#dragit-contained'); //element 

  draggable.on('mousedown', function(e){

      var dr = $(this).addClass("drag").css("cursor","move");
      height = dr.outerHeight();
      width = dr.outerWidth();
      max_left = dr.parent().offset().left + dr.parent().width() - dr.width();
      max_top = dr.parent().offset().top + dr.parent().height() - dr.height();
      min_left = dr.parent().offset().left;
      min_top = dr.parent().offset().top;

      ypos = dr.offset().top + height - e.pageY,
      xpos = dr.offset().left + width - e.pageX;
      $(document.body).on('mousemove', function(e){
          var itop = e.pageY + ypos - height;
          var ileft = e.pageX + xpos - width;
          
          if(dr.hasClass("drag")){
              if(itop <= min_top ) { itop = min_top; }
              if(ileft <= min_left ) { ileft = min_left; }
              if(itop >= max_top ) { itop = max_top; }
              if(ileft >= max_left ) { ileft = max_left; }
              dr.offset({ top: itop,left: ileft});
          }
      }).on('mouseup', function(e){
              dr.removeClass("drag");
      });
  });