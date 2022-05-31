import Book from './modules/book.js';
import {getLi as getLi, addLi as addLi, deleteLi as deleteLi, removeFromList as removeFromList} from './modules/DOMelements.js';
import {storeData as storeData, loadData as loadData} from './modules/localStorage.js';
import {setBorder as setBorder} from './modules/styles.js';
import {hide as hide, show as show} from './modules/nav.js';
import displayHour from './modules/date.js'

//DOM variables
const bookList = document.getElementById('book-list');
const addBook = document.getElementById('add-book');
const newTitle = document.getElementById('new-title');
const newAuthor = document.getElementById('new-author');
const allBooks = document.getElementById('all-books');
const listBtn = document.getElementById('list');
const addNewBtn = document.getElementById('addNew');
const aboutBtn = document.getElementById('about');
const addNewSection = document.getElementById('addNewSection');
const aboutSection = document.getElementById('aboutSection');
const clock = document.getElementById('date');
let bookData = [];

displayHour(clock);

//Load localStorage
window.addEventListener('load', () => {
  bookData = [...loadData(bookList)];
  setBorder(allBooks, bookData);
});

//Nav functionality
listBtn.addEventListener('click', () => {
  if(allBooks.classList.contains('hide')) {
    show(allBooks);
  }
  hide(addNewSection);
  hide(aboutSection);
})

addNewBtn.addEventListener('click', () => {
  if(addNewSection.classList.contains('hide')) {
    show(addNewSection);
  }
  hide(allBooks);
  hide(aboutSection);
})

aboutBtn.addEventListener('click', () => {
  if(aboutSection.classList.contains('hide')) {
    show(aboutSection);
  }
  hide(allBooks);
  hide(addNewSection);
})

//Add book functionality
addBook.addEventListener('click', () => {
  if(newTitle.value && newAuthor.value) {
    const id = bookData.length == 0 ?  1 : bookData.length + 1;
    const book = new Book(`"${newTitle.value}"`, `by ${newAuthor.value}`, `book${id}`, bookData);
    book.addBook(bookData);
    addLi(bookList, getLi(book));
    setBorder(allBooks, bookData);
    storeData(bookData);
  };
  newTitle.value = '';
  newAuthor.value = '';
})

//Remove functionality
bookList.addEventListener('click', e => {
  if(e.target.nodeName == 'BUTTON') {
    deleteLi(e.target.parentNode.id);
    bookData = [...removeFromList(e.target.parentNode.id, bookData)];
    storeData(bookData);
    setBorder(allBooks, bookData);
  };
});

