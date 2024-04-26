import MainContents from "../components/MainContents";
import MainSlide from "../components/MainSlide";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

export default function Main() {
  return (
    <>
      <Header />
      <MainSlide />
      <MainContents />
      <Footer />
    </>
  );
}
