class WolvesView {
    constructor() {
        const $all = document.querySelectorAll.bind(document);
        this.$wolfImg = $all("[data-wolfImg]");
        this.$wolfName = $all("[data-wolfName]");
        this.$wolfAge = $all("[data-wolfAge]");
    }

    renderIndexWolves(wolves) {
        wolves.forEach((wolf, i) => {
            this.$wolfImg[i].src = wolf.getImg();
            this.$wolfName[i].textContent = wolf.getName();
            this.$wolfAge[i].textContent = wolf.getAge();
        })
    }
}