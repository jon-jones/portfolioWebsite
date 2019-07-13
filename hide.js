$(document).ready(function() {
    var toggle = false;
    $(".navbar-toggler").click(function() {
        if (toggle == false) {
            $(".hide").hide();
            toggle = true;
        } else {
            $(".hide").show();
            toggle = false;
        }

       
    });
});
