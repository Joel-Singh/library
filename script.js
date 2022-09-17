const cardContainer = document.querySelector(".card-container");
let myLibrary = [];

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

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function addBookToDOM(book) {
  const newBook = document.createElement("div");
  newBook.classList.add("card");
  const title = document.createElement("h1");
  title.textContent = book.title;
  newBook.append(title);

  const author = document.createElement("p");
  author.textContent = book.author;
  newBook.append(author);

  const pages = document.createElement("p");
  pages.textContent = `Pages: ${book.pages}`;
  newBook.append(pages);

  const isRead = document.createElement("p");
  isReadString = book.isRead ? "Has been read" : "Has not been read";
  isRead.textContent = isReadString;
  newBook.append(isRead);

  cardContainer.append(newBook);
}

function showLibraryOnHTML() {
  cardContainer.innerHTML = "";
  myLibrary.forEach((book) => {
    addBookToDOM(book);
  });
}

atomic = new Book("Atomic Habits", "James Clear", 392, false);
blueDragon = new Book("Baby Blue Dragon", "The Knight", 62, true);
skulls = new Book("Human Skulls", "The Grim Reaper", 666, false);
computer = new Book("Super Cool Computers", "Ed Sheeran", 3998, false);

addBookToLibrary(atomic);
addBookToLibrary(blueDragon);
addBookToLibrary(skulls);
addBookToLibrary(computer);
showLibraryOnHTML();
