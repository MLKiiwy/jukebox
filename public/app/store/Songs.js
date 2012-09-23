Ext.define("AirJukeBox.store.Songs", {
    extend: "Ext.data.Store",
    requires: "Ext.data.proxy.LocalStorage",
    config: {
        model: "AirJukeBox.model.Song",
        data: [
            { title: "Macarena", uri: "spotify:track:1qCFAg2xNJWZF0D5JpDkRu" },
            { title: "Un Dos Tres Maria", uri: "spotify:track:0I1c35netIODt3RiGTtCKx" },
            { title: "We Are The champions", uri: "spotify:track:5Y55FgnTswJip7H7HfCOpa" },
            { title: "We Will Rock You", uri: "spotify:track:23WsKRReucDjMli5fuRwkn" },
            { title: "Thriller", uri: "spotify:track:1D9KEXIrlmPUkMTdYzqgX4" }
        ],
        sorters: [{ property: 'title', direction: 'DESC'}]
    }
});
