import AboutBlock from "./components/AbouBlock/AboutBlock";
import Advantages from "./components/Advantages/Advantages";
import BackgroundVideo from "./components/BackgroundVideo/BackgroundVideo";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Shops from "./components/Shops/Shops";

export default function Home() {
  return (
    <>
      <BackgroundVideo />
      <AboutBlock />
      <Advantages />
      <Products />
      <Shops />
    </>
  );
}
