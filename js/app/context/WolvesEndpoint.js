class WolvesEndpoint {
    constructor() {
        this.wolves;
    }

    async getWolf(i) {
        this.wolves = await LobinhosAPI.getAPI();
        return new Wolf(
            this.wolves[i].name, 
            this.wolves[i].link_image, 
            this.wolves[i].age,
            this.wolves[i].status,
            this.wolves[i].description
        )
    }

    async getIndexWolves() {
        return [await this.getWolf(0), await this.getWolf(1)];
    }

    getRandomIndexWolves() {
        return [
            this.getWolf(Math.floor(Math.random() * Constants.MaxAPISize)), 
            this.getWolf(Math.floor(Math.random() * Constants.MaxAPISize))
        ];
    }
}