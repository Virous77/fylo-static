import "./App.css";
import NavBar from "./Components/Navbar/NavBar";
import MainHeader from "./Components/MainHeader/MainHeader";
import FyloDetails from "./Components/FyloDetails/FyloDetails";
import FyloArticle from "./Components/FyloArticle/FyloArticle";
import Authors from "./Components/Authors/Authors";
import EmailModal from "./Components/EmailModal/EmailModal";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainHeader />
      <FyloDetails />
      <FyloArticle />
      <Authors />
      <EmailModal />
      <Footer />
    </div>
  );
}

export default App;
