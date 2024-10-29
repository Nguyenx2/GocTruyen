export const dateToString = (date) => {
  const d = new Date(date);
  const formattedDate = d.toLocaleDateString();
  const formattedTime = d.toLocaleTimeString();
  return `${formattedDate} ${formattedTime}`;
};

export const dateToTimeAgo = (releaseDate) => {
  const now = Date.now();
  const released = new Date(releaseDate).getTime();
  const diffInMs = now - released;

  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const diffInWeeks = Math.floor(diffInMs / 7);

  if (diffInMinutes < 60) {
    return `${diffInMinutes} phút trước`;
  } else if (diffInHours < 24) {
    return `${diffInHours} giờ trước`;
  } else if (diffInDays < 7) {
    return `${diffInDays} ngày trước`;
  } else {
    return new Date(releaseDate).toLocaleDateString();
  }
};
