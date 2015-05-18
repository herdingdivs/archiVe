var cache = {};                                   //cache is available everywhere
var render = function(book, container) {
    var id = book.id;
    cache[id] = book;
    var html =
        '<div class="tile">' +
        '<a href="#" class="thumbnail">' +
        '<img src="http://lorempixel.com/g/128/175/" alt="...">' +
        '<span class="title">' + book.volumeInfo.title + '</span><br>' +
        '<span class="authors">' + book.volumeInfo.authors[0] + '</span>' +
        '</a>' +
        '</div>';
    $(html).data("id", id).appendTo(container);
};
var renderAll = function(books, container) {                      //calling a method
    $(books).each(function (i, item) {   //grab items, take each one and do something
        render(item, container);
    });
    $(".tile").draggable({
        cursor: "move",
        revert: true,
        stack: ".tile"
    });
    console.log(cache);
    $(".tile").tooltip({
        items: ".tile",
        content: "drag & drop to a library below",
        show: null, // show immediately
        open: function (event, ui) {
            if (typeof(event.originalEvent) === "undefined") {
                return false;
            }
        }
    });
};