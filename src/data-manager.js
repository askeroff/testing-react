class DataManager {
  getBooks() {
    return JSON.parse(localStorage.getItem('books')) || [];
  }

  loadBooks() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.getBooks());
      }, 0);
    });
  }

  add(name) {
    const books = this.getBooks();
    books.push({ name, read: false });
    localStorage.setItem('books', JSON.stringify(books));
  }
  
  delete(index) {
    const books = this.getBooks();
    books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(books));
  }

  changeBook(prop, value, index) {
    const books = this.getBooks();
    const changedBooks = books.map((item, i) => {
      if (index === i) {
        item[prop] = value;
      }
      return item;
    });
    localStorage.setItem('books', JSON.stringify(changedBooks));
  }
}

export default DataManager;
