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
            console.log("hello");
            window.plugins.flashlight.toggle();

        });
    },
 
};

app.initialize();

