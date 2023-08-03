import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Desktop28 from "./pages/Desktop28";
import Desktop26 from "./pages/Desktop26";
import Desktop25 from "./pages/Desktop25";
import Desktop24 from "./pages/Desktop24";
import Desktop23 from "./pages/Desktop23";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-26":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-25":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-24":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-23":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Desktop28 />} />
      <Route path="/desktop-26" element={<Desktop26 />} />
      <Route path="/desktop-25" element={<Desktop25 />} />
      <Route path="/desktop-24" element={<Desktop24 />} />
      <Route path="/desktop-23" element={<Desktop23 />} />
    </Routes>
  );
}
export default App;
