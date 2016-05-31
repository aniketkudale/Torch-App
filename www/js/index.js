var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },

    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function () {
        app.receivedEvent('deviceready');
        document.getElementById("torch").addEventListener("click", function () {
          
            window.plugins.flashlight.toggle();

        });
    },
    
    receivedEvent: function(id) {
    console.log(id);
    }
    
 
};

app.initialize();

