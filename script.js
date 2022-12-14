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

Book.prototype.toggleRead = function() {
  this.isRead = this.isRead ? false : true;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function showLibraryOnHTML() {
  function createDOMBook(book, index) {
    const newBook = document.createElement("div");
    newBook.classList.add("card");

    const title = document.createElement("h1");
    title.textContent = book.title;
    title.classList.add('title')

    const author = document.createElement("p");
    author.textContent = book.author;
    author.classList.add('author')

    const pages = document.createElement("p");
    pages.textContent = `Pages: ${book.pages}`;
    pages.classList.add('pages')

    const isRead = document.createElement("p");
    isReadString = book.isRead ? "Has been read" : "Has not been read";
    isRead.textContent = isReadString;
    pages.classList.add('is-read')

    const removeButton = document.createElement("button");
    removeButton.setAttribute("type", "button");
    removeButton.setAttribute("data-book-index", index);
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      myLibrary.splice(removeButton.getAttribute("data-book-index"), 1);
      showLibraryOnHTML();
    });
    removeButton.classList.add('remove-button')

    const toggleReadBtn = document.createElement("button");
    toggleReadBtn.setAttribute("type", "button");
    toggleReadBtn.setAttribute("data-book-index", index);
    toggleReadBtn.textContent = "Toggle";
    toggleReadBtn.addEventListener("click", () => {
      myLibrary[toggleReadBtn.getAttribute("data-book-index")].toggleRead();
      showLibraryOnHTML();
    });
    toggleReadBtn.classList.add('toggle-read-button')

    const newBookElements = [title, author, pages, isRead, removeButton, toggleReadBtn]
    newBook.append(...newBookElements)
    return newBook;
  }

  cardContainer.innerHTML = "";
  myLibrary.forEach((book, index) => {
    cardContainer.append(createDOMBook(book, index));
  });
}

document.querySelector("button.add-book").addEventListener("click", () => {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const isRead = document.querySelector("#isRead").checked;

  document.querySelector("form").reset();

  const newBook = new Book(title, author, pages, isRead);
  addBookToLibrary(newBook);
  showLibraryOnHTML();
});

atomic = new Book("Atomic Habits", "James Clear", 392, false);
blueDragon = new Book("Baby Blue Dragon", "The Knight", 62, true);
skulls = new Book("Human Skulls", "The Grim Reaper", 666, false);
computer = new Book("Super Cool Computers", "Ed Sheeran", 3998, false);

addBookToLibrary(atomic);
addBookToLibrary(blueDragon);
addBookToLibrary(skulls);
addBookToLibrary(computer);
showLibraryOnHTML();
