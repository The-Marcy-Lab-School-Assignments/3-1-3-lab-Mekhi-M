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

export const renderNewUserForm = (newUserFormEl) => {
  const labelUsername = document.createElement("label");
  const inputUsername = document.createElement("input");
  const labelIsCool = document.createElement("label");
  const inputIsCool = document.createElement("input");
  const labelFavLang = document.createElement("label");
  const inputFavLang = document.createElement("select");
  const optionLang0 = document.createElement("option");
  const optionLang1 = document.createElement("option");
  const optionLang2 = document.createElement("option");
  const optionLang3 = document.createElement("option");
  const button = document.createElement("button");

  // structure elements
  inputFavLang.append(optionLang0, optionLang1, optionLang2, optionLang3);

  // attribute setting
  // username text
  labelUsername.htmlFor = "username";

  inputUsername.type = "text";
  inputUsername.id = "username";
  inputUsername.name = "username";
  // ----------------------------------------------------

  // is cool checkbox
  labelIsCool.htmlFor = "is-cool";

  inputIsCool.type = "checkbox";
  inputIsCool.id = "is-cool";
  inputIsCool.name = "isCool";
  // ----------------------------------------------------

  // fav lang dropdown
  labelFavLang.htmlFor = "favorite-language";

  inputFavLang.id = "favorite-language";
  inputFavLang.name = "favoriteLanguage";

  optionLang0.value = "None";
  optionLang1.value = "JavaScript";
  optionLang2.value = "Python";
  optionLang3.value = "Ruby";
  // ----------------------------------------------------

  // content
  labelUsername.textContent = "Username";
  labelIsCool.textContent = "Is this user cool?";
  labelFavLang.textContent = "Favorite Language";
  optionLang0.textContent = "None";
  optionLang1.textContent = "JavaScript";
  optionLang2.textContent = "Python";
  optionLang3.textContent = "Ruby";
  button.textContent = "Create User";

  newUserFormEl.append(
    labelUsername,
    inputUsername,
    labelIsCool,
    inputIsCool,
    labelFavLang,
    inputFavLang,
    button
  );
};

export const renderNewUser = (newUserEl, newUser) => {
  newUserEl.replaceChildren();

  const h2 = document.createElement("h2");
  const pIsCool = document.createElement("p");
  const pFavLang = document.createElement("p");

  // attribute setting
  h2.dataset.userId = newUser.id;

  // content
  h2.textContent = newUser.username;
  pIsCool.textContent = newUser.isCool
    ? "The hippest in the house!"
    : "A real square.";
  pFavLang.textContent = `Favorite Language: ${newUser.favoriteLanguage}`;

  newUserEl.append(h2, pIsCool, pFavLang);
};
