$(function () {
    var imgname = "";
    var flag = true;
    $("#onoff").click(function () {
        if (flag) {
            imgname = "images/on.jpg";
            flag = false;
        } else {
            imgname = "images/off.jpg";
            flag = true;
        }
        $("img").attr("src", imgname)

    });
    /* show hide example */
    $("#hide").click(function () {
        $("#text").hide();
    });
    $("#show").click(function () {
        $("#text").show();
    });
    
    
    $("#fadein").click(function(){
     $("#box").fadeIn();
    });
    $("#fadeout").click(function(){
        $("#box").fadeOut();
    });

});
