import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";

function App() {
  const MainLayout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  };

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Main />} />
      </Route>
    </Routes>
  );
}

export default App;
