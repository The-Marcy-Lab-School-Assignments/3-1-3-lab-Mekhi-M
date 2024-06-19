export const renderBookList = (bookListEl, books) => {
  bookListEl.replaceChildren();

  for (let book of books) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const p = document.createElement("p");
    const button = document.createElement("button");

    // structure elements
    li.append(img, p, button);

    // attribute setting
    img.src = book.coverUrl;
    img.alt = `An old cover of ${book.title}`;
    button.dataset.authorUrlKey = book.author.urlKey;

    // content
    p.textContent = `Title: ${book.title}`;
    button.textContent = `View ${book.author.name}`;

    bookListEl.append(li);
  }
};

export const renderAuthorInfo = (authorInfoEl, author) => {};

export const renderNewUserForm = (newUserFormEl) => {};

export const renderNewUser = (newUserEl, newUser) => {};
