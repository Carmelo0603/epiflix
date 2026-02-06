import { Component } from "react";
import { Row, Col, Spinner, Alert } from "react-bootstrap";

class MovieGallery extends Component {
  state = {
    movies: [],
    isLoading: true,
    isError: false,
  };

  fetchMovies = () => {
    // Sostituisci 'tuachiave' con la tua API Key di OMDB
    const apiKey = "34cbe335";
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${this.props.saga}`;

    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero dei film");
        }
      })
      .then((data) => {
        // I film sono contenuti nella proprietà "Search" della risposta [consegna]
        if (data.Search) {
          this.setState({ movies: data.Search.slice(0, 6), isLoading: false });
        } else {
          this.setState({ isLoading: false, isError: true });
        }
      })
      .catch((err) => {
        console.error(err);
        this.setState({ isLoading: false, isError: true });
      });
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    return (
      <div className="mt-4 px-4">
        <h4>{this.props.title}</h4>
        {this.state.isLoading && (
          <div className="text-center my-3">
            <Spinner animation="border" variant="danger" />
          </div>
        )}
        {this.state.isError && <Alert variant="danger">Si è verificato un errore nel caricamento della galleria.</Alert>}
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          {this.state.movies.map((movie) => (
            <Col key={movie.imdbID} className="mb-2 text-center px-1">
              <img className="img-fluid movie-poster" src={movie.Poster} alt={movie.Title} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default MovieGallery;
