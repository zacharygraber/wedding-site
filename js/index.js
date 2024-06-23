window.onload = function () {
    var heroWrapper = document.getElementById("hero-wrapper");

    window.onscroll = function () {
        let percentageOfHero = window.scrollY / heroWrapper.offsetHeight;
        
        if (percentageOfHero <= 1.0) {
            let opacity = 2.0 - (2.1 * percentageOfHero);
            if (opacity > 1.0) {
                heroWrapper.style.opacity = 1.0;
            }
            else if (opacity < 0.0) {
                heroWrapper.style.opacity = 0.0;
            }
            else {
                heroWrapper.style.opacity = opacity;
            }
        }
    }
}