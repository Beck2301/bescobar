import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Solo scrollear arriba si no estamos volviendo al home
    if (pathname !== "/") {
      window.scrollTo(0, 0);
      document.documentElement.scrollTo(0, 0);
      document.body.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
