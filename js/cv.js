$(document).ready(function () {
// click sur langue et softskills
    $("#option1").click(function () {
        $("#langues").show(1000);
        $("#softskills").hide(1000);

    });

    $("#option2").click(function () {
        $("#langues").hide(1000);
        $("#softskills").show(1000);

    });



    let defile = $("#sousTitre").find(".fs-3");
    let delais = 0;

    function showText(time) {
        for (let i = 0; i < defile.length; i++) {


            setTimeout(function () { defile.eq(i).fadeToggle(time / 2); defile.eq(i).fadeToggle(time / 2) }, i * time);
            delais = defile.length * time;

        };
// fonction récursive
        setTimeout(function () { showText(2000) }, delais);

    };

    showText(1000);
    console.log(delais);




});