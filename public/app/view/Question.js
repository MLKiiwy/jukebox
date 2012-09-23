Ext.define("AirJukeBox.view.Question", {
    extend: "Ext.Container",
    alias: "widget.question",

     initialize: function () {

        this.callParent(arguments);

        var topToolbar = {
            xtype: "toolbar",
            title: 'AirBox',
            docked: "top"
        };

        var input = {
            xtype: "textfield",
            name: 'response',
            id: 'response',
            required: true
        };

        var tryAgain = {
            xtype: "label",
            html : 'Try again ...',
            id: 'tryAgain',
            hidden:true
        };

        var button = {
            xtype: "button",
            text: "Answer",
            handler: this.onButtonPress,
            name: 'responseButton',
            id: 'responseButton'
        };

        this.add([
            topToolbar,
            {
                xtype: 'container',
                layout: 'vbox',
                items:[
                    {
                        xtype:"fieldset",
                        layout: 'vbox',
                        padding: 20,
                        margin: 5,
                        items: [
                        {
                            xtype: "label",
                            html : 'Title or Artist ?'
                        },
                        input,button,tryAgain
                        ]
                    }
                ]
            }]);
    },

    onButtonPress:function() {
        console.log('on button press response');

        this.fireEvent('newResponse', this);
    }

});
