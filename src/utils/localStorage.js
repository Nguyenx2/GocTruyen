export const saveChapterToLocalStorage = (slug, chapterNumber) => {
  let existingChapters = JSON.parse(localStorage.getItem(slug)) || [];
  if (!existingChapters.includes(chapterNumber)) {
    existingChapters.push(chapterNumber);
    localStorage.setItem(slug, JSON.stringify(existingChapters));
  }
};

export const getChaptersFromLocalStorage = (slug) => {
  return JSON.parse(localStorage.getItem(slug)) || [];
};

export const removeChapterFromLocalStorage = (slug, chapterNumber) => {
  let existingChapters = JSON.parse(localStorage.getItem(slug)) || [];
  const newChapters = existingChapters.filter(
    (chapter) => chapter !== chapterNumber
  );
  localStorage.setItem(slug, JSON.stringify(newChapters));
};
