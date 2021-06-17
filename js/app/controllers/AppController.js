class AppController {

    constructor() {
        this.wolves = new WolvesEndpoint();
        this.wolvesView = new WolvesView();
        this.headerView = new HeaderView();
    }

    async start() {
        window.onscroll = () => this.headerView.hideHeader();
        this.wolvesView.renderIndexWolves(await this.wolves.getIndexWolves());
    }
}