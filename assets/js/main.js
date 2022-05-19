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
    var lastCaptcha = "";

    // load first
    lastCaptcha = createCaptcha();
    $("#captcha").val(lastCaptcha);

    // button rest captcha
    $("#reset-captcha").click(function(){
        $("#captcha").val("");
        lastCaptcha = createCaptcha();
        $("#captcha").val(lastCaptcha);
    });

   
    // ========== form info ========== \\
    var isFulleName = false;
    var isPhone = false;
    var isMail = false;
    var isFileName = false;
    var isCaptcha = false;

    $(".submit-info").click(function(){
        var fulleName = $('.full-name').val();
        var phone = $('.phone').val();
        var mail = $('.mail').val();
        var fileName = $('.file-name').val();
        var captcha = $('.captcha-value').val();

        clearError();

        if(fulleName != null && fulleName != '')
        {
            isFulleName = true;
        } else {
            $('.form-fullname .error').text('Họ và tên không được bỏ trống');
            isFulleName = false;
       }

        if(phone != null && phone != '')
        {
            if(isVietnamesePhoneNumber(phone)) {
                isPhone = true;
            } else {
                $('.form-phone .error').text('Không đúng định dạng số điện thoại');
                isPhone = false;
            }
        } else {
            $('.form-phone .error').text('Số điện thoại không được bỏ trống');
            isPhone = false;
        }

        if(mail != null && mail != '')
        {
            if(validateEmail(mail)) { 
                isMail = true;
            } else {
                $('.form-mail .error').text('Không đúng định dạng mail');
                isMail = false;
            }
        } else {
            $('.form-mail .error').text('Địa chỉ mail không được bỏ trống');
            isMail = false;
        }

        if(fileName != null && fileName != '')
        {
            isFileName = true;
        } else {
            $('.form-file .error').text('Chưa chọn hình');
            isFileName = false;
        }

        if(captcha != null && captcha != '')
        {
            if(captcha === lastCaptcha)
            {
                isCaptcha = true;
            } else {
                $('.form-captcha .error').text('Chuỗi bảo mật không đúng với hệ thống');
                $("#captcha").val("");
                lastCaptcha = createCaptcha();
                $("#captcha").val(lastCaptcha);
                isCaptcha = false;
            }
        } else {
            $('.form-captcha .error').text('Chuỗi bảo mật không được bỏ trống');
            $("#captcha").val("");
            lastCaptcha = createCaptcha();
            $("#captcha").val(lastCaptcha);
            isCaptcha = false;
        }

        // Finish
        if(isFulleName && isPhone && isMail && isFileName && isCaptcha)
        {
            alert("Finish");
        }
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

function clearError()
{
    $('.form-fullname .error').text('');
    $('.form-phone .error').text('');
    $('.form-mail .error').text('');
    $('.form-file .error').text('');
    $('.form-captcha .error').text('');
}

function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test( $email );
}

function isVietnamesePhoneNumber($number) {
    return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test($number);
}

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
