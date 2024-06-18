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

export const getAuthor = () => {};

export const createNewUser = () => {};
