Ext.define("AirJukeBox.view.Start", {
    extend: "Ext.Container",
    alias: "widget.start",

     initialize: function () {

        this.callParent(arguments);

        var topToolbar = {
            xtype: "toolbar",
            title: 'AirBox',
            docked: "top"
        };

        var inputName = {
            xtype: "textfield",
            label: 'Pseudo',
            id: 'pseudo',
            required: true

        };

        var labelStatus = {
            xtype: "label",
            html : 'Connecting ...',
            name: 'labelStatus',
            id: 'labelConnexion'
        };

        var buttonBlindtest = {
            xtype: "button",
            text: "Blindtest",
            handler: this.onButtonPress,
            name: 'goButton',
            id: 'blindTestButton',
            hidden:true
        };

        var buttonJukebox = {
            xtype: "button",
            text: "Jukebox",
            handler: this.onButtonJokeBoxPress,
            name: 'jukeboxButton',
            id: 'jukeboxButton',
            hidden:true
        };

        var spacer = {
            xtype:'spacer',
            height:20
        };

        this.add([
            topToolbar,
            {
                xtype: 'container',
                layout: 'vbox',
                items:[
                    {
                        xtype:"fieldset", 
                        padding: 20, 
                        margin:5,
                        items: [inputName,
                                spacer,
                                labelStatus,
                                spacer,
                                buttonBlindtest
                                ]
                    }
                    
                ]
            }
            ]);
    },

    onButtonPress:function() {
        console.log('on button press go');

        this.fireEvent('buttonGoClick', this);
    },

    onButtonJokeBoxPress:function() {
        console.log('on button jukebox');

        this.fireEvent('jukeboxClick', this);
    }
});
