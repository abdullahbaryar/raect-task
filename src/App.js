import { useLocation } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  useEffect(() => {
    if (!location?.search) {
      window.scrollTo(0, 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location?.pathname]);
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
