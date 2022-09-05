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


// console.table(myLibrary)


// function that loops through the array and displays the added book-objects as an individual card on the page
function DisplayCard() {
    const cardDiv = document.querySelector('.card-area')

    // if (myLibrary) {
    myLibrary.forEach(object => {
        const card = document.createElement('div')
        card.classList.add('oneCard')

        const cardAuthor = document.createElement('p')
        const cardTitle = document.createElement('p')
        const cardPages = document.createElement('p')
        const cardIsRead = document.createElement('p')

        cardAuthor.textContent = `Author: ${object.author}`
        cardTitle.textContent = `Title: ${object.title}`
        cardPages.textContent = `Pages: ${object.pages}`
        // cardIsRead.textContent = object.isRead
        if (object.isRead) {
            cardIsRead.textContent = 'Read'
        } else {
            cardIsRead.textContent = 'Not read'
        }

        card.appendChild(cardAuthor)
        card.appendChild(cardTitle)
        card.appendChild(cardPages)
        card.appendChild(cardIsRead)


        cardDiv.appendChild(card)
    })
}



// remove a book with a button from the book-card, so 1. add a button to the card, 2. make the button remove the book from the array

/*

let ma = new Book('Lotr', 'Tolkien', 200)
let ba = new Book('Harry', 'Alex', 300)
let ca = new Book('Jarmo', 'Jokul', 600)

addBookToLibrary(ma)
addBookToLibrary(ba)

addBookToLibrary(ca)

// DisplayCard()
ca.changeStatus()
ma.changeStatus()
ma.changeStatus()
// DisplayCard()

// myLibrary.pop(ba)



DisplayCard()

*/

// new book button

// form for the new book

// read the data from the form and add the new book to the array

let formTitle = document.getElementById('title')
let formAuthor = document.getElementById('author')
let formPages = document.getElementById('pages')
let formStatus = document.getElementById('status')


function addNew() {
    let newBook = new Book(formTitle.value, formAuthor.value, formPages.value)
    addBookToLibrary(newBook)
    DisplayCard()
    formTitle.value = ''
    formAuthor.value = ''
    formPages.value = ''

    
}



// add eventlistener to the button

const addBtn = document.querySelector('#addnew')

addBtn.addEventListener('click',addNew)