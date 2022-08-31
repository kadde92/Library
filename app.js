function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = parseInt(pages)
    this.isRead = false
  
}

let myLibrary = [];

function addBookToLibrary(object) {
    myLibrary.push(object)
}

Book.prototype.info = function() {
    if (this.isRead) return `${this.title} by ${this.author}, ${this.pages}, is read}`
    if (!this.isRead) return `${this.title} by ${this.author}, ${this.pages}, not read yet}`
}

Book.prototype.changeStatus = function() {
    if (!this.isRead) {
        this.isRead = true;
    } else {
        this.isRead = false;
    }
}

let ma = new Book('Lotr', 'Tolkien', 200)
let ba = new Book('Harry', 'Alex', 300)

addBookToLibrary(ma)
addBookToLibrary(ba)

console.table(myLibrary)





