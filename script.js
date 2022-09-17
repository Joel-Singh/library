function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.info = () => {
    isReadString = isRead ? "read" : "not read yet";
    return `${title}, by ${author}, ${pages} pages, ${isReadString}`;
  };
}
