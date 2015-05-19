var cache = {};                                   //cache is available everywhere
var render = function(book, bin) {
    var id = book.id;
    cache[id] = book;
    var html =
        '<div class="col-xs-12 col-sm-6 col-md-3 tile clearfix">' +
        '<a href="#" class="thumbnail">' +
        '<img src="'+book.volumeInfo.imageLinks.thumbnail+'" alt="...">' +
        '<p class="text-center title"><strong>' +book.volumeInfo.title + '</strong></p><br>' +
        '<p class="text-center authors">' + book.volumeInfo.authors[0] + '</p>' +
        '</a>' +
        '</div>';

    $(html).data("id", id).appendTo(bin);

}
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