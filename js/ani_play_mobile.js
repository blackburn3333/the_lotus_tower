
/**
 * Created by Jayen on 12/21/2017.
 */
$("#bb_go_mobile").click(function() {
    $('.div_two_stst').toggleClass('div_two');
    $('.div_three_stst').toggleClass('div_three');
});


window.onbeforeunload = function () {
        window.scrollTo(0, 0);
}

function myFunction(){
    location.reload();
    window.scrollTo(0, 0);
}
