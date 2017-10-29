posts = undefined

(function() {
    var event = new Event("posts_load");

	  var request = new XMLHttpRequest();
    request.addEventListener("load", function(e) {
        posts = JSON.parse(e.responseText);
        document.dispatchEvent(event);
    });
    request.open("GET", "/posts.json");
    request.send();
})();
