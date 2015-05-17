$(document).ready(function() {
    var dropHandler = function (event, ui) {
            var $this = $(this);
            var thumb = ui.draggable.find("a.thumbnail");
            thumb.removeClass("danger").removeClass("primary").removeClass("warning").removeClass("success");
            if (! $this.hasClass("btn")) {
                $this = $this.parents(".btn");
            }

            /* I need the JSON object associated with each tile to store in local storage */
            if ($this.hasClass("btn-danger")) {
                thumb.addClass("danger");
            } else if ($this.hasClass("btn-primary")) {
                thumb.addClass("primary");
            } else if ($this.hasClass("btn-warning")) {
                thumb.addClass("warning");
            } else if ($this.hasClass("btn-success")) {
                thumb.addClass("success");
            }
            console.log(ui, this);

        },
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



 
