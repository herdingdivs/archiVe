$(document).ready(function() {
    var dropHandler = function (event, ui) {
        var $this = $(this);
        var thumb = ui.draggable.find("a.thumbnail");
        thumb.removeClass("danger").removeClass("primary").removeClass("warning").removeClass("success");
        if (! $this.hasClass("btn")) {
            $this = $this.parents(".btn");
        };

        /* I need the JSON object associated with each tile to store in local storage */
        var collection = null;
        if ($this.hasClass("btn-danger")) {
            thumb.addClass("danger");
            collection = "keeper";    //setting up a key for each collection
        } else if ($this.hasClass("btn-primary")) {
            thumb.addClass("primary");
            collection = "surfing";
        } else if ($this.hasClass("btn-warning")) {
            thumb.addClass("warning");
            collection = "gonna";
        } else if ($this.hasClass("btn-success")) {
            thumb.addClass("success");
            collection = "maybe";
        }
        var library = localStorage[collection];  //make into a function in local_storage.js
        if (! library){
            library = {};
        } else {
            library = JSON.parse(library);
        }
        var id = ui.draggable.data("id");
        var book = cache[id];
        library[id] = book;
        localStorage[collection] = JSON.stringify(library);
        //console.log(ui, this, ui.draggable.data("id"), cache[ui.draggable.data("id")]);
        console.log(localStorage);
    }
    dragOptions = {
        cursor: "move",
        revert: true,
        stack: ".tile"
    };
    $(".tile").draggable(dragOptions);
    $(".row button, .row button div.collectionIcon, .row button p.collectionText, .row button img").droppable({
        accept: ".tile",
        tolerance: "pointer",
        drop: dropHandler
    });
});



 
