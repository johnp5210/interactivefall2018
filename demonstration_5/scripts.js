$(document).ready(function() {

    //Variables for a slideshow
    var bgImages = ["imgs/slide1.jpg", "imgs/slide2.jpg", "imgs/slide3.jpg", "imgs/slide4.jpg", ];
    var count = bgImages.length;
    var ticker = 0;
    var time = 0;

    //Variables for dynamic text
    var message = "Hello"
    var name = "John"
    var date = new Date()
    
    //Display text to HTML
    $("#text").text(message + ", " + name + ".")
    $("#date").text(date);


    function screensaver() {
        var url = "url(" + bgImages[ticker] + ")"
        $("#screensaver").css("background-image", url);
        $("#ticker").text((ticker + 1) + "/" + count)
        ticker += 1;
        if (ticker > count - 1) {
            ticker = 0;
        }
    };
    //screensaver();

    //Demo for initializing screensaver ticker
    $(document).click(function() {
        //screensaver();
    });

    //Auto Slide
    setInterval(function() {
        screensaver()
    }, 2000);

    //Move to get fade
    $(document).mousemove(function() {
        time = 0;
        ticker = 0;
        $("#screensaver").css("opacity", 0)
        $("#ticker").css("opacity", 0)
    })

    //Detect when to bring it back
    setInterval(function() {
        time += 1;
        if (time > 2) {
            $("#screensaver").css("opacity", 1)
            $("#ticker").css("opacity", 1)
        }
    }, 1000);
});