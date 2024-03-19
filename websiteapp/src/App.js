import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import { Homepage } from "./pages";

export const App = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Homepage lang={"arm"} />} />
      <Route path="/en" element={<Homepage lang={"en"} />} />
      <Route path="/ru" element={<Homepage lang={"ru"} />} />
      <Route path="/arm" element={<Homepage lang={"arm"} />} />
      <Route path="/*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};
