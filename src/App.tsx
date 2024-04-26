import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages";

function App() {
  // const MainLayout = () => {
  //   return (
  //     <>
  //       <Header />
  //       <Outlet />
  //       <Footer />
  //     </>
  //   );
  // };

  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

export default App;
