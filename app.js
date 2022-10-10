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

const cardDiv = document.querySelector('.card-area')

function displayCard() {
    let i = 1

    for (let book of myLibrary) {
        
        const card = document.createElement('div')
        card.classList.add('oneCard')

        const cardAuthor = document.createElement('p')
        const cardTitle = document.createElement('p')
        const cardPages = document.createElement('p')
        const cardIsRead = document.createElement('p')
        const removeBtn = document.createElement('button')
        

        removeBtn.textContent = 'Remove?'
        cardAuthor.textContent = `Author: ${book.author}`
        cardTitle.textContent = `Title: ${book.title}`
        cardPages.textContent = `Pages: ${book.pages}`
        // cardIsRead.textContent = object.isRead
        if (book.isRead) {
            cardIsRead.textContent = 'Read'
        } else {
            cardIsRead.textContent = 'Not read'
        }

        card.appendChild(cardAuthor)
        card.appendChild(cardTitle)
        card.appendChild(cardPages)
        card.appendChild(cardIsRead)
        card.appendChild(removeBtn)
        card.setAttribute('data-index',i)



        cardDiv.appendChild(card)
        
        i++

    }
}

// function for removing all child elements (books)

function removeChildElements() {
    while (cardDiv.firstChild) {
        cardDiv.removeChild(cardDiv.firstChild)
    }
}
// new book button

// form for the new book

// read the data from the form and add the new book to the array

let formTitle = document.getElementById('title')
let formAuthor = document.getElementById('author')
let formPages = document.getElementById('pages')
// let formStatusRead = document.getElementById('choice1')
// let formStatusNotRead = document.getElementById('choice2')


function addNew() {

    let newBook = new Book(formTitle.value, formAuthor.value, formPages.value)
    if (checkIfEmpty(formTitle.value, formAuthor.value, formPages.value)) {
        if (checkRadio() === 'read') {
            newBook.changeStatus()
        }
        addBookToLibrary(newBook)
        removeChildElements()
        displayCard()
        formTitle.value = ''
        formAuthor.value = ''
        formPages.value = ''
    }


}


function checkIfEmpty(a, b, c) {
    if (a === '' || b === '' || c === '') return false
    return true
}


// add eventlistener to the button

const addBtn = document.querySelector('#addnew')

addBtn.addEventListener('click', addNew)

// radio button verifier event
//

const radioButtons = document.querySelectorAll('input[name="status"]');
addBtn.addEventListener('click', checkRadio)


function checkRadio() {
    let selected;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selected = radioButton.value;
            return selected
            break;
        }
    }
}



// add event for clicking the book-card button for removing the book from the display



// btn for changing the read status

