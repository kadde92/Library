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

Book.prototype.info = function () {
    if (this.isRead) return `${this.title} by ${this.author}, ${this.pages}, is read}`
    if (!this.isRead) return `${this.title} by ${this.author}, ${this.pages}, not read yet}`
}

Book.prototype.changeStatus = function () {
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


// function that loops through the array and displays the added book-objects as an individual card on the page

const cardDiv = document.querySelector('.card-area')

// if (myLibrary) {
    myLibrary.forEach(object => {
        const card = document.createElement('div')
        card.classList.add('oneCard')

        const cardAuthor = document.createElement('p')
        const cardTitle = document.createElement('p')
        const cardPages = document.createElement('p')
        const cardIsRead = document.createElement('p')

       cardAuthor.textContent = object.author
       cardTitle.textContent = object.title
       cardPages.textContent = object.pages
       cardIsRead.textContent = object.isRead

        card.appendChild(cardAuthor)
        card.appendChild(cardTitle)
        card.appendChild(cardPages)
        card.appendChild(cardIsRead)


        cardDiv.appendChild(card)
    })





