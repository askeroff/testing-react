const mock = jest.fn().mockImplementation(() => {
  return {
    getBooks() {
      console.log('This method is getting called from the mock');
      return [{ name: 'Book 1', read: false }];
    }
  };
});

export default mock;
