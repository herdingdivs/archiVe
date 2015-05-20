$(document).ready(function() {
  
    var container = $('#bin');
    
    $('.collections button').on('click', function(){
      var collection = $(this).data('collection');
      var books = getBooks(collection);
      
      container.empty();
      
      renderAll(books, container);
    });
  
  
    var dropHandler = function (event, ui) {
        var $this = $(this);
        var thumb = ui.draggable.find("a.thumbnail");
        thumb.removeClass("danger").removeClass("primary").removeClass("warning").removeClass("success");
        if (! $this.hasClass("btn")) {
            $this = $this.parents(".btn");
        };

        /* Need JSON object associated with each tile to store in local storage */
        var collection = $this.data('collection');
        setBook(ui.draggable.data('book'), collection);
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


function getBooks(collection) {
  var books = getItem(collection) || [];
  return books.map(function(id){
    return getItem(id);
  });
}

function setBook(book, collection) {
    var cached = getItem(book.id);
    if(!cached) setItem(book.id, book);
    
    if(collection) {
      var group = getItem(collection);
      if(!group) group = [];
      if(!~group.indexOf(book.id)) group.push(book.id); // only add new books.
      setItem(collection, group);
    }
}


function setItem(id, data) {
  localStorage.setItem(id, JSON.stringify(data));
}

function getItem(id) {
  var data = localStorage.getItem(id);
  if(!data) return null;
  try {
    data = JSON.parse(data)
  } catch(e) {
    data = null;
  }
  return data;
}

 
