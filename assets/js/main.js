// ========== load screen ========== \\
// function loadPage() {
//     calculateModal();
// }

// window.addEventListener("orientationchange", function() {
//     location.reload();
// });

// function calculateModal () {
//     $(document).ready(function(){
//         var head = parseFloat($(".modal-header").height());
//         var height = parseFloat($(".modal-body").height());
//         $(".modal-body").height(height - head);
//     });
// }


$(document).ready(function(){
    // ========== owl-carousel ========== \\
    $('.slider-menu').owlCarousel({
        items: 6,
        dots: false,
        responsive:{
            0:{
                items:4,
            },
            
            767:{
                items:4,
            },

            768:{
                items:4,
            },
            1200:{
                items:6,
            },
        }
    });

    $('.slider-info').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
    })

    

    // ========== favourite ========== \\
    $(".icon-plus").click(function(){
        $(this).toggleClass("icon-minus")  ; 
    })


    // ========== Item gallery ========== \\
    $(".item-gallery").click(function(event){
        var text = $(event.target).attr('class');
        if(text != null)
        {
            var listText = text.split(" ");
            if(listText[0] != "noflip")
            {
                if($(this).hasClass( "flip" ))
                {
                    $(this).removeClass("flip");
                } else {
                    $(this).addClass("flip");
                }
            }
            
        } else {
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
        $('.modal').css("display", "block");
    })

    $(".modal-close").click(function(){
        $('.modal').css("display", "none");
        $('.item-carousel').removeClass( "fs-active" );
    })

    // ========== Menu ========== \\
    $(".item-carousel").click(function(){
        if(!$(this).hasClass( "fs-active" ))
        {
            $(".item-carousel").removeClass( "fs-active" );
            $(this).addClass("fs-active");
        } 
    })

    $(".choose-img").click(function(e){
        e.preventDefault();
        $('#myfile').trigger('click');

        $('input[type=file]').change(function () {
            $('.file-name').val(this.files[0]['name']);
      })
    });


    // ========== captcha ========== \\
    $("#captcha").val(createCaptcha());
    $("#reset-captcha").click(function(){
        $("#captcha").val("");
        $("#captcha").val(createCaptcha());
    });
  
    // ========== Top =========== \\
    // $(window).scroll(function (){
    //     var scroll = $(".modal-body").scrollTop();
    //     if (scroll > 60){
    //         $('.modal-top').css('display', 'block');
    //     } else {
    //         $('.modal-top').css('display', 'none');
    //     }
    // });

    // $("#button-top").click(function(){
    //     $(".modal-body").animate(
    //         {scrollTop: 0},
    //         500
    //     );
    // });


});

function createCaptcha()
{
    var txt= "0123456789abcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var captcha="";
    for(var i=1;i<=6; i++)
    {
        captcha = captcha + txt.charAt(Math.floor(Math.random()*63));
    }
    return captcha;
}





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
