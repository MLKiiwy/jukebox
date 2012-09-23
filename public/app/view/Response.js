Ext.define("AirJukeBox.view.Response", {
    extend: "Ext.Container",
    alias: "widget.response",

     initialize: function () {

        this.callParent(arguments);

        var topToolbar = {
            xtype: "toolbar",
            title: 'AirBox',
            docked: "top"
        };

        var good = {
            xtype: "label",
            html : 'Yeah, you rock !',
            id: 'goodLabel',
            hidden:true
        };

        var bad = {
            xtype: "label",
            html : 'Not fast enough ...',
            id: 'badLabel',
            hidden:true
        };

        var goodAnswer = {
            xtype: "label",
            html : '',
            id: 'goodAnswer',
            hidden:false
        };

        this.add([topToolbar, 
            {
                xtype:'container', 
                layout:'vbox',
                items:[
                    good, bad, goodAnswer
                ]
            }]);
    }
});
