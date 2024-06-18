export const getFirstThreeFantasyBooks = async () => {
  const url = `https://openlibrary.org/subjects/fantasy.json`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to get fantasy books");
    }
  } catch (error) {
    console.warn(error.message);
    return null;
  }
};

export const getAuthor = () => {};

export const createNewUser = () => {};
