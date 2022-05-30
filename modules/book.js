export default class Book {
  constructor(title = 'title', author = 'author', id = '0', list) {
    this.title = title;
    this.author = author;
    this.id = id;
    this.list = list;
  }

  addBook() {
    // This will add itself to the bookData Array
    this.list.push(this);
  }

  removeBook() {
    // This Will Remove It self From the bookData Array
    this.list.filter((book) => book.id !== this.id);
  }
}
