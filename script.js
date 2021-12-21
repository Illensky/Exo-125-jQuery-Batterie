document.addEventListener("keypress", function (e) {
    switch (e.key) {
        case "a" :
            $('#clap')[0].play();
            $('.clap').addClass("playing");
            setTimeout(() => $('.clap').removeClass("playing"), 500);
            break;
        case "s" :
            $('#hihat')[0].play();
            $('.hihat').addClass("playing");
            setTimeout(() => $('.hihat').removeClass("playing"), 500);
            break;
        case "d" :
            $('#kick')[0].play();
            $('.kick').addClass("playing");
            setTimeout(() => $('.kick').removeClass("playing"), 500);
            break;
        case "f" :
            $('#openhat')[0].play();
            $('.openhat').addClass("playing");
            setTimeout(() => $('.openhat').removeClass("playing"), 500);
            break;
        case "g" :
            $('#boom')[0].play();
            $('.boom').addClass("playing");
            setTimeout(() => $('.boom').removeClass("playing"), 500);
            break;
        case "h" :
            $('#ride')[0].play();
            $('.ride').addClass("playing");
            setTimeout(() => $('.ride').removeClass("playing"), 500);
            break;
        case "j" :
            $('#snare')[0].play();
            $('.snare').addClass("playing");
            setTimeout(() => $('.snare').removeClass("playing"), 500);
            break;
        case "k" :
            $('#tom')[0].play();
            $('.tom').addClass("playing");
            setTimeout(() => $('.tom').removeClass("playing"), 500);
            break;
        case "l" :
            $('#tink')[0].play();
            $('.tink').addClass("playing");
            setTimeout(() => $('.tink').removeClass("playing"), 500);
            break;
    }
})