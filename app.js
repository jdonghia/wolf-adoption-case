(function () {
  window.onload = () => {
    getAPI();

    function getAPI() {
      const http = new XMLHttpRequest();
      http.open("GET", "https://lobinhos.herokuapp.com/wolves/")
      http.addEventListener("load", () => {
        insertIndexWolf(JSON.parse(http.responseText));
      });
      http.send()
    }

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

  
    function insertIndexWolf(arr) {
        const $wolfImg = document.querySelectorAll(".wolf__img");
        const $wolfName = document.querySelectorAll(".wolf__name");
        const $wolfAge = document.querySelectorAll(".wolf__age");
        $wolfImg.forEach((v, i) => v.src = arr[i].link_image);
        $wolfName.forEach((v, i) => v.textContent = arr[i].name);
        $wolfAge.forEach((v, i) => v.textContent = arr[i].age);
    }


  };
})();