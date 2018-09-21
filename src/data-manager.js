class DataManager {
  getBooks() {
    return JSON.parse(localStorage.getItem('books')) || [];
  }

  add(name) {
    const books = this.getBooks();
    books.push({ name });
    localStorage.setItem('books', JSON.stringify(books));
  }
}

export default DataManager;
