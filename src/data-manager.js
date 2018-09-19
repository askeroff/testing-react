class DataManager {
  getBooks() {
    return JSON.parse(localStorage.getItem('books')) || [];
  }
}

export default DataManager;
