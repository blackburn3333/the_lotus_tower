/**
 * Created by Jayen on 12/21/2017.
 */
$("#bb_go").click(function() {
    $('.main_Cloud').toggleClass('cloud_move');
    $('.main_bird').toggleClass('Bird_move');
    $('.info_div_1move_set').toggleClass('info_div_1move');
});

window.onbeforeunload = function () {
        window.scrollTo(0, 0);
}

function myFunction(){
    location.reload();
    window.scrollTo(0, 0);
}
