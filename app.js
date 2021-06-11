(function () {
  window.onload = () => {
    window.onscroll = () => hideHeader();

    function hideHeader() {
      const $headerLink = document.querySelectorAll(".header__link");
      const $headerLogo = document.querySelector(".header__logo");

      if (window.scrollY > 200) {
        $headerLogo.style.height = "2.5rem";
        $headerLogo.style.marginLeft = ".6rem";
        $headerLink.forEach((v) => (v.style.fontSize = "1rem"));
      } else {
        $headerLogo.style.height = "6rem";
        $headerLink.forEach((v) => (v.style.fontSize = "1.8rem"));
        $headerLogo.style.marginLeft = "0";
      }
    }
  };
})();