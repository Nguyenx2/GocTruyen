import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Category from "./pages/Category/Category";
import Contact from "./pages/Contact/Contact";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import FinishedComic from "./pages/FinishedComic/FinishedComic";
import ComicResultWithCategory from "./pages/ComicResult/ComicResultWithCategory";
import ComicResultWithKeyword from "./pages/ComicResult/ComicResultWithKeyword";
import Home from "./pages/Home/Home";
import Chapter from "./pages/Chapter/Chapter";
import ComicDetail from "./pages/ComicDetail/ComicDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "the-loai",
    element: <Category />,
  },
  {
    path: "/da-hoan-thanh",
    element: <FinishedComic />,
  },
  {
    path: "lien-he",
    element: <Contact />,
  },
  {
    path: "/truyen-tranh/:slug",
    element: <ComicDetail />,
  },
  {
    path: "/truyen-tranh/:slug/chapter/:chapterNumber",
    element: <Chapter />,
  },
  {
    path: "/the-loai/:slug",
    element: <ComicResultWithCategory />,
  },

  {
    path: "tim-kiem",
    element: <ComicResultWithKeyword />,
  },
]);

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={open} />
    </QueryClientProvider>
  );
}

export default App;
