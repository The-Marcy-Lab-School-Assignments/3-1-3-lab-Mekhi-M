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

export const renderAuthorInfo = (authorInfoEl, author) => {
  authorInfoEl.replaceChildren();

  const h2 = document.createElement("h2");
  const img = document.createElement("img");
  const pBirthDate = document.createElement("p");
  const pBio = document.createElement("p");
  const a = document.createElement("a");

  // attribute setting
  img.src = author.pictureUrl;
  img.alt = `A picture of ${author.name}`;
  a.href = author.wikipediaUrl;

  // content
  h2.textContent = author.name;
  pBirthDate.textContent = `Born: ${author.birthDate}`;
  pBio.textContent = author.bio;
  a.textContent = `Wikipedia Link`;

  authorInfoEl.append(h2, img, pBirthDate, pBio, a);
};

export const renderNewUserForm = (newUserFormEl) => {};

export const renderNewUser = (newUserEl, newUser) => {};
