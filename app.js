// Book Class: Represents a Book 
class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class: Handle UI Tasks
class UI{
    static displayBooks(){
        const StoredBooks = [{
            title: 'Book One',
            author: 'John Doe',
            isbn: '3434434',
        },
        {
            title: 'Book Two',
            author: 'Jane Doe',
            isbn: '454545'
        }
    ];

    const books = StoredBooks;

    books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(){
        
    }
}
// Store Class: Handles storage (Local storage stays in the browser)

// Event: Display Books

// Event: Add a Book

// Event: Remove a Book