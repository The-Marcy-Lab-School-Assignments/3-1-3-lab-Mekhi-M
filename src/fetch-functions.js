export const getFirstThreeFantasyBooks = async () => {
  const url = `https://openlibrary.org/subjects/fantasy.json`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to get fantasy books");
    }

    const fantasySect = await response.json();

    const fantasyBooks = fantasySect.works.slice(0, 3);

    const reformattedFantasyBooks = fantasyBooks.map((book) => {
      const newFormat = {};

      newFormat.title = book.title;
      newFormat.author = {
        name: book.authors[0].name,
        urlKey: book.authors[0].key,
      };
      newFormat.coverUrl = `https://covers.openlibrary.org/a/id/${book.cover_id}-M.jpg`;

      return newFormat;
    });

    return reformattedFantasyBooks;
  } catch (error) {
    console.warn(error.message);
    return null;
  }
};

export const getAuthor = async (urlKey) => {
  const url = `https://openlibrary.org${urlKey}.json`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to get author");
    }

    const author = await response.json();

    const reformattedAuthor = {
      birthDate: author["birth_date"],
      bio: author["bio"],
      wikipediaUrl: author["wikipedia"],
      name: author["name"],
      pictureUrl: `https://covers.openlibrary.org/a/id/${author["photos"][0]}-M.jpg`,
    };

    return reformattedAuthor;
  } catch (error) {
    console.warn(error.message);
    return null;
  }
};

export const createNewUser = async (newUserObj) => {
  const url = `https://jsonplaceholder.typicode.com/users`;

  const postOption = {
    method: "POST",
    body: JSON.stringify(newUserObj),
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, postOption);

    if (!response.ok) {
      throw new Error("Failed to create new user");
    }

    return await response.json();
  } catch (error) {
    console.warn(error.message);
    return null;
  }
};
