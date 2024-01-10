$(document).ready(function () {
// pour navigation NAVBAR
//  on supprime le collapse lors du click
$('#main-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

let id_navbar = ["home", "about", "portfolio", "contact"];
// on cache d'abord tout sauf "home"
for (let i = 1; i < id_navbar.length; i++) {
    $("."+ id_navbar[i]).css("display","none");}


    //    création des clicks et des hides sur chaque catégorie
    for (let i = 0; i < id_navbar.length; i++) {
        $("#" + id_navbar[i]).click(function () {
            // lors du click, on cache tout
            for (let j = 0; j < id_navbar.length; j++) {
                $("." + id_navbar[j]).css("display","none");
            };

            // on montre la catégorie clickée
            $("." + id_navbar[i]).fadeToggle(
                "slow",
                "swing",)} 
                )}



    // POUR DEFILEMENT MAIN
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


    // Pour animation rotation
    let t = 0;
    function moveit(element, rayon, xcenter, ycenter, speed) {
        t += 0.05;

        r = rayon;         // radius
        // let xcenter = 100;   // center X position
        // let ycenter = 100;   // center Y position

        let newLeft = Math.floor(xcenter + (r * Math.cos(t)));
        let newTop = Math.floor(ycenter + (r * Math.sin(t)));

        element.animate({
            top: newTop,
            left: newLeft,
        }, speed, function () {
            moveit(element, rayon, xcenter, ycenter, speed);
        });
    }

    function rotateImage(element, degree, animDuration) {
        element.animate({ transform: degree }, {
            duration: animDuration,
            easing: "linear",
            step: function (now) {
                $(this).css({
                    '-webkit-transform': 'rotate(' + now + 'deg)',
                    '-moz-transform': 'rotate(' + now + 'deg)',
                    'transform': 'rotate(' + now + 'deg)'
                });
            }
        });

        rotateImage(element, degree, animDuration);
    }
    // moveit(element, rayon, xcenter, ycenter, speed)
    moveit($(".container1"), 150, 0, -200, 100);
    // rotateImage($(".container2"), -360, 15000)

    // Toogle dans la partie about
    let id_categories = ["presentation", "hard_skills", "formation", "experience", "langues", "soft_skills"]

    //    création des clicks et des hides sur chaque catégorie
    for (let i = 0; i < id_categories.length; i++) {
        $("#" + id_categories[i]).click(function () {
            // lors du click, on cache tout
            for (let j = 0; j < id_categories.length; j++) {
                $("." + id_categories[j]).hide();
            };

            // on montre la catégorie clickée
            $("." + id_categories[i]).fadeToggle(
                "slow",
                "swing",
                // function(){
                //     // on cherche les progress bar dans la catégorie
                //     let progress = $("#" + id_categories[i]).find(".progress-bar");
                //     for (let k = 0; k < progress.length; k++) {
                //         a = progress[k].style.width;
                //         progress[k].style.width = "10%"
                //         progress[k].animate(
                //             {width: a},
                //             1000,
                //             function(){ console.log("progress[k].style.width = a") });
                //         // console.log(a)

                //     }

                // }
            );


        }
        )
    };

    // let progress = $("#langues").find(".progress-bar");
    // a = progress[0].style.width;
    // progress[0].style.width = "10%"

    // progress[0].animate(
    //     {width :a},
    //     1000,
    //     function(){console.log("bonjour")}

    // )
    // console.log(a);
    // console.log(progress[0].style.width);









})
