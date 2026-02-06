import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MovieGallery from "./components/MovieGallery";
import MyFooter from "./components/Footer";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <div className="container-fluid px-4 pt-3">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="mb-0">TV Shows</h2>
          <div>
            <i className="bi bi-grid icons"></i>
            <i className="bi bi-grid-3x3 icons"></i>
          </div>
        </div>

        {/* Gallerie con fetch dinamica */}
        <MovieGallery title="Trending Now" saga="Harry Potter" />
        <MovieGallery title="Watch it Again" saga="Lord of the Rings" />
        <MovieGallery title="New Releases" saga="Star Wars" />
      </div>
      <MyFooter />
    </div>
  );
}

export default App;
