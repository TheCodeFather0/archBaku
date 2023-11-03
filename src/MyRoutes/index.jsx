import Home from "../Pages/Home";
import About from "../Pages/About";

export const MyRoutes = [
  { id: 1, path: "/", element: <Home />, title: "Əsas səhifə" },
  { id: 8, path: "/about", element: <About />, title: "Haqqımızda" },
  { id: 2, path: "/projects", element: <Home />, title: "Layihələr" },
  { id: 3, path: "/services", element: <Home />, title: "Xidmətlər" },
  { id: 4, path: "/vacansies", element: <Home />, title: "Vakansiyalar" },
  { id: 5, path: "/news", element: <Home />, title: "Xəbərlər" },
  { id: 6, path: "/contact", element: <Home />, title: "Əlaqə" },
];
