import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import ArticleSection from "./components/article";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="px-[120px]">
        <Hero />
        <ArticleSection />
      </div>

      <Footer />
    </div>
  );
}

export default App;
