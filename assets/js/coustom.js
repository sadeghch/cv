$(document).ready(function () {
    let countdone = true;
    // main menu code 
    var top = 0;
    $("#toggle-menu-btn").click(function () {
        console.log("show")
        $(".mobile-nav-menu").addClass("show")
    })
    $("#close-menu-btn").click(function(){
        console.log("unshow")
        $(".mobile-nav-menu").removeClass("show");
    })
    $(window).on('scroll', function () {
        $("#main-menu-id").toggleClass("hide", $(window).scrollTop() > top);
        top = $(window).scrollTop();
    });

    // portfolio code 
    $(".img-to-show").hover(function () {
        $(this).css("opacity", "0");
    }, function () {
        $(this).css("opacity", "1");
    });


    $(window).on("scroll", function () {
        let windowScroll = $(window).scrollTop()
        let counterUp = $(".section-counter-up").offset().top
        if (windowScroll >= counterUp || counterUp <= windowScroll) {
            if (countdone){
                countNumber();
            }
            countdone = false
            
        }
    })
    function countNumber() {
        $('.counter').each(function () {
            var $this = $(this);
            var countTo = $this.attr('data-count');

            $({
                countNum: $this.text()
            }).animate({
                    countNum: countTo
                },

                {

                    duration: 2000,
                    easing: 'linear',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum + " + ");
                        //alert('finished');
                    }

                });
        });
    }
});