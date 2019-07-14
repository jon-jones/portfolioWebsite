$(document).ready(function() {
    var toggle = false;
    $(".navbar-toggler").click(function() {
        if (toggle == false) {
            $(".hide").hide();
            $("#typed").css("margin-top", "20%");
            toggle = true;
        } else {
            $(".hide").show();
            toggle = false;
        }

       
    });
});
