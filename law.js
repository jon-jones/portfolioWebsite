$(document).ready(function() {
    var toggle = false;
    $(".navbar-toggler").click(function() {
        if (toggle == false) {
            $(".big-title").hide();
            $(".consult").hide();
            toggle = true;
        } else {
            $(".big-title").show();
            $(".consult").show();
            toggle = false;
        }

       
    });
});
