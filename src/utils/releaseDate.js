export const releaseDate = (release_date) => {
    const date = new Date(release_date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return date;
  };