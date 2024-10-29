import { useLocation } from "react-router-dom";

const usePageQuery = () => {
  const query = new URLSearchParams(useLocation().search);
  return Number(query.get("page")) || 1;
};

export default usePageQuery;
