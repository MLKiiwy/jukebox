Ext.define("AirJukeBox.view.Jukebox", {
    extend: "Ext.Container",
    alias: "widget.jukebox",

    initialize: function () {

        this.callParent(arguments);

        var searchButton = {
            xtype:'button',
            text:'Search',
            ui:'forward',
            handler: this.onSearchButtonClick,
            scope: this
        };

        var topToolbar = {
            xtype: "toolbar",
            title: 'AirBox',
            docked: "top",
            items:[
                {xtype: 'spacer'},
                searchButton
            ]
        };

        var songList = {
            xtype: "songlist",
            store: Ext.getStore("Playlist"),
            disableSelection:true,
            id:"songlist"
        };

        this.add([topToolbar, songList]);
    },
    config: {
        layout: {
            type: 'fit'
        }
    },
    onSearchButtonClick:function() {
        this.fireEvent("goSearchView", this);
    }
});
