function load() {
    Sentry.init({
        dsn: "https://fa13e8d770fc4d61b9de581d678b2deb@o87286.ingest.sentry.io/6503225",
        release: "7.7",
        //integrations: [new Sentry.Integrations.BrowserTracing()],
        //debug: true,
        tracesSampleRate: 1.0,
        integrations: function(integrations) {
            return integrations.filter(function(integration) {
                return integration.name !== "InboundFilters" && integration.name !== "Dedupe";
            });
        }
      });  


    var box = document.getElementById("box1");
    box.addEventListener("click", onBoxClick);
};
function onBoxClick(e) {
    var box = e.target;   
    if (box.style.backgroundColor == "blue") {
        box.style.backgroundColor = "white";
    }
    else {
        ox.style.backgroundColor = "blue";
    }
};
 /// Just an example
function generateAnError() {
    var obj = {};
    obj.david();  
};
window.onload = load;
