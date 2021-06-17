class LobinhosAPI {
    static async getAPI() {
        return await fetch("https://lobinhos.herokuapp.com/wolves/").then(r => r.json()).catch(e => e);
    } 
}