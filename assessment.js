// Create a function called getAvailableBooks that returns an array of all available
//books.
function getAvailableBooks(){
    let foundBooks =[];
    if (title in books){
        foundBooks.push(this,title)
    }
    console.log(foundBooks);
}
getAvailableBooks();

// Create a function getBooksByAuthor that takes an author's name as an argument and
// returns an array of all books by that author.
//input author -string and find the author and return 
//output -array of books

 function getBooksByAuthor(author) {
   let authorArray=[];
   if (author in books){
    authorArray.push(books)
    console.log(authorArray)
   } 


//    console.log(authorArray);
    
 }
 getBooksByAuthor(author)

//  Create a function addNewBook that takes a book object as an argument and adds it
// to the library, ensuring that the new book has all required properties (title, author,
// publicationYear, and isAvailable).

function addNewBook(book) {
    let book={
        title:"No longer at Ease",
        author:"Chinua Achebe",
        publicationYear: 1960,
        isAvailable:true
    }
    books.add(book)
    
}
console.log(books);

//Create a function checkoutBook that takes a book title as an argument and changes
// the book's isAvailable property to false. If the book is not found in the library, the
// function should return a message indicating that the book is not available.
 function checkoutBook(title) {
    if ("The beautiful girl" in title){
        console.log(`The book is not available and ${this,isAvailable}`)
    }
 }
 checkoutBook(title)


//  Create a function returnBook that takes a book title as an argument and changes the
// book's isAvailable property to true. If the book is not found in the library, the function
// should return a message indicating that the book does not belong to the library.

function returnBook(title) {
    if ("Great Expectations" in title){
        console.log(`${this,isAvailable}`)
    }
    else{
        console.log(`The book does not belong in the library`);
    }
}
returnBook(books)
const books = [
{ title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
isAvailable: true },
{ title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
isAvailable: false },
{ title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
1866, isAvailable: true },
{ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
isAvailable: false },
{ title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
];