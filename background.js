var port = null;

function sendNativeMessage(message) {
    port.postMessage(message);
}

function onDisconnected() {
    console.log("Failed to connect: " + chrome.runtime.lastError.message);
    port = null;
}

function connect() {
    var hostName = "com.google.chrome.example.echo";
    console.log("Connecting to native messaging host: " + hostName)
    port = chrome.runtime.connectNative(hostName);
    port.onDisconnect.addListener(onDisconnected);
}

chrome.extension.onRequest.addListener(function(data, sender) {
    if (data.length > 0) {
        if(data == 'connect') {
            connect();
        }
        else {
            sendNativeMessage(data);
        }
    }
});
