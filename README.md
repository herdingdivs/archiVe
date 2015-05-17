# archiVe

## A. General Information

**Project Title:** Project Archive
**Brief Project Description:**	A web-based search and storage tool, in which the user can access the world of available digital free resources, perform a personal search, based on a word or subject, and store the results, organized in a personal Archive bookshelf.
**Prepared By:** Weblab Archive team: Yvonne Joyce, Patrick Mulcrone, Deb Peterson, Selina Ross

Date: 	May 11, 2015	Version:	1.0

## B.	Project Objective:

To create a user-friendly application, which uses Google Books to perform searches and responds with a list of free digital periodicals (books, magazine articles), organized according to the users request, (published date, title, author, etc.), an integrated into a library/shelf storage system on the users computer.

Archive will produce expedient response to a subject search, on user driven criteria and input, by producing a list of available information that can be accessed at no cost to the user. The search subject can be from academic to fix-it in nature.

Archive will utilize the Google Books API to perform the search. Archive will also provide a library/shelving tool, which will enable the user to create a personal library to store search results in an organized method of their choice.

 Archive will therefore consolidate and store, the results of searches, in an organized file format, with a visible thumbnail for easy identification. Therefore information will be readily available for future use. (eg. research paper or project).


## C.Assumptions

1.	Google Books API will continue to be available for free public access.
2.	Access to the Google Books API will not change from its present format.
3.	Access is limited to available public volumes.
4.	Archive files will be stored locally.
5.	Archive will adhere to the Terms of Use set forth by Google for the use of Google Books API.

## D. Project Scope

Archive will be HTML, CSS, and Javascript based.  AJAX and JSON will be substituted when possible, as a way of making the code more efficient.  
Archive search results shall be limited to ten (10). The more general the subject, the less definitive the search, so multiple searches may have to be performed.
Following an initial search, the user then selects which books they would like to save for future reference, in their personal “bookshelves”.


#### Performing a search:

You can perform a volumes search by sending an HTTP GET request to the following 
URI: `https://www.googleapis.com/books/v1/volumes?q=search+terms`

This request has a single required parameter:

* `q`: - Search for volumes that contain this text string. There are special keywords you can specify in the search terms to search in particular fields, such as:
* `intitle`: Returns results where the text following this keyword is found in the title.
* `inauthor`: Returns results where the text following this keyword is found in the author.
* `inpublisher`: Returns results where the text following this keyword is found in the publisher.
* `subject`: Returns results where the text following this keyword is listed in the category list of the volume.
* `isbn`: Returns results where the text following this keyword is the ISBN number.
* `lccn`: Returns results where the text following this keyword is the Library of Congress Control Number.
* `oclc`: Returns results where the text following this keyword is the Online Computer Library 
Center number.

#### Example:

`GET https://www.googleapis.com/books/v1/volumes?q=fix+a+toilet&filter=free-ebooks&key={YOUR_API_KEY}`

* `q` : "fix a toilet" - This parameter was URL encoded. Full-text search query string. (string)
* `filter` : "free-ebook"

**Example Response:** (JSONP format)

```js
{
 "kind": "books#volumes",
 "items": [
  {
   "kind": "books#volume",
   "id": "_ojXNuzgHRcC",
   "etag": "OTD2tB19qn4",
   "selfLink": "https://www.googleapis.com/books/v1/volumes/_ojXNuzgHRcC",
   "volumeInfo": {
    "title": "Flowers",
    "authors": [
     "Vijaya Khisty Bodach"
    ],
   ...
  },
  {
   "kind": "books#volume",
   "id": "RJxWIQOvoZUC",
   "etag": "NsxMT6kCCVs",
   "selfLink": "https://www.googleapis.com/books/v1/volumes/RJxWIQOvoZUC",
   "volumeInfo": {
    "title": "Flowers",
    "authors": [
     "Gail Saunders-Smith"
    ],
    ...
  },
  {
   "kind": "books#volume",
   "id": "zaRoX10_UsMC",
   "etag": "pm1sLMgKfMA",
   "selfLink": "https://www.googleapis.com/books/v1/volumes/zaRoX10_UsMC",
   "volumeInfo": {
    "title": "Flowers",
    "authors": [
     "Paul McEvoy"
    ],
    ...
  },
  "totalItems": 3
}
```

## E. Project Milestones

Milestones | Deliverables | Date
-----------|--------------|------
Project Plan | Individual assignments |5/11/2015

## F. Team Members

* Selina Ross - [selinaross](https://github.com/selinaross)
* Deb Peterson - [dlpeters](https://github.com/dlpeters)
* Patrick Mulcrone - [patrickmulcrone](https://github.com/patrickmulcrone)	
* Yvonne Joyce - [ysjoyce](https://github.com/ysjoyce)

## G. Resources

* [Google Books](http://books.google.com)
	
	
	
	

