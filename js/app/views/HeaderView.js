class HeaderView {
    constructor() {
        this.$headerLink = document.querySelectorAll(".header__link");
        this.$headerLogo = document.querySelector(".header__logo");
    }

    hideHeader() {
        if (window.scrollY > 200) {
            this.$headerLogo.style.height = "2.5rem";
            this.$headerLogo.style.marginLeft = ".6rem";
            this.$headerLink.forEach(v => v.style.fontSize = "1rem");
        } else {
            this.$headerLogo.style.height = "6rem";
            this.$headerLink.forEach(v => v.style.fontSize = "1.8rem");
            this.$headerLogo.style.marginLeft = "0";
        }
    }
}