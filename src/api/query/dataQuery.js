import Axios from "../axios";

const HOME_URL = "/home";
const LIST_URL = "/danh-sach";
const CATEGORIES_URL = "/the-loai";
const COMIC_DETAIL_URL = "/truyen-tranh";

export const fetchData = async () => {
  const { data } = await Axios.get(HOME_URL);
  return data;
};

export const fetchRecentUpdates = async ({ queryKey }) => {
  const [, page] = queryKey;
  const { data } = await Axios.get(`${LIST_URL}/truyen-moi?page=${page}`);
  return data;
};

export const fetchComicDetail = async ({ queryKey }) => {
  const [, slug] = queryKey;
  const { data } = await Axios.get(`${COMIC_DETAIL_URL}/${slug}`);
  return data;
};

export const fetchCategories = async () => {
  const { data } = await Axios.get(`${CATEGORIES_URL}`);
  return data;
};

export const fetchComicWithCategory = async ({ queryKey }) => {
  const [, slug, currentPage] = queryKey;
  const { data } = await Axios.get(
    `${CATEGORIES_URL}/${slug}?page=${currentPage}`
  );
  return data;
};

export const fetchFinishedComic = async ({ queryKey }) => {
  const [, currentPage] = queryKey;
  const { data } = await Axios.get(
    `${LIST_URL}/hoan-thanh?page=${currentPage}`
  );
  return data;
};

export const fetchComicWithKeyword = async ({ queryKey }) => {
  const [, keyword, page] = queryKey;
  const { data } = await Axios.get(`/tim-kiem?keyword=${keyword}&page=${page}`);
  return data;
};
