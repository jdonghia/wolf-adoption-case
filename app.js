(function () {
  window.onload = () => {
    getAPI();


    function getAPI() {
      const http = new XMLHttpRequest();
      http.open("GET", "https://lobinhos.herokuapp.com/wolves/")
      http.addEventListener("load", () => {
        const arr = JSON.parse(http.responseText)
        /*insertIndexWolf(arr);*/
        insertRandomIndexWolf(arr);
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

    function insertRandomIndexWolf(arr) {
        const $wolfImg = document.querySelectorAll(".wolf__img");
        const $wolfName = document.querySelectorAll(".wolf__name");
        const $wolfAge = document.querySelectorAll(".wolf__age");
        const firstWolf = [$wolfImg[0],$wolfName[0],$wolfAge[0]]
        const secondWolf = [$wolfImg[1],$wolfName[1],$wolfAge[1]]
        firstWolf.forEach((v,i) => {
          let random = Math.floor(Math.random() * 210);
          if(i === 0) v.src = arr[random].link_image;
          if(i === 1) v.textContent = arr[random].name;
          if(i === 2) v.textContent = arr[random].age;
          console.log(random);
        })
        secondWolf.forEach((v,i) => {
          let random = Math.floor(Math.random() * 210);
          if(i === 0) v.src = arr[random].link_image;
          if(i === 1) v.textContent = arr[random].name;
          if(i === 2) v.textContent = arr[random].age;
        })
      
  
    }
  };
})();