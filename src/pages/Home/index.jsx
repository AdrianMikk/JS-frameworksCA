import Navbar from "../../components/Navigation/Header/Header";
import Products from "../Products";
import Footer from "../../components/Navigation/Footer/Footer";

export default function Home() {
  return (
    <div>
        <Navbar />
      <h1>Welcome to My eCom Store</h1>
      <div className="product">
      <Products />
      </div>
      <Footer	/>
    </div>
  );
}