import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import PagPrincipal from "./pages/PagPrincipal";
import Desktop26 from "./pages/Desktop26";
import Desktop25 from "./pages/NossasSolucoes";
import Desktop24 from "./pages/Sobre";
import Desktop23 from "./pages/Contato";
import { useEffect } from "react";
import Contato from "./pages/Contato";
import Sobre from "./pages/Sobre";
import NossasSolucoes from "./pages/NossasSolucoes";

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
      case "/NossasSolucoes":
        title = "";
        metaDescription = "";
        break;
      case "/Sobre":
        title = "";
        metaDescription = "";
        break;
      case "/Contato":
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
      <Route path="/" element={<PagPrincipal />} />
      <Route path="/desktop-26" element={<Desktop26 />} />
      <Route path="/NossasSolucoes" element={<NossasSolucoes />} />
      <Route path="/Sobre" element={<Sobre />} />
      <Route path="/Contato" element={<Contato />} />
    </Routes>
  );
}
export default App;
