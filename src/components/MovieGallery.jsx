import { Component } from "react";
import { Row, Col, Spinner, Alert, Carousel } from "react-bootstrap";

// Funzione di utilità per dividere l'array di film in "pezzi" da 6

const chunkArray = (arr, size) => {
  if (arr.length === 0) return [];
  const chunked = [];

  // Creiamo i gruppi normali
  for (let i = 0; i < arr.length; i += size) {
    let chunk = arr.slice(i, i + size);

    // SE l'ultimo gruppo è più piccolo della dimensione richiesta...
    if (chunk.length < size && arr.length >= size) {
      // ...prendiamo direttamente gli ultimi 'size' elementi dell'array originale
      chunk = arr.slice(arr.length - size);
    }

    chunked.push(chunk);
  }
  return chunked;
};

class MovieGallery extends Component {
  state = {
    movies: [],
    isLoading: true,
    isError: false,
  };

  fetchMovies = () => {
    // La tua API Key già inserita
    const apiKey = "34cbe335";
    // Usiamo l'URL con la saga passata come prop
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${this.props.saga}`;

    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel caricamento dei film");
        }
      })
      .then((data) => {
        if (data.Search) {
          // Salviamo tutti i film (non solo 6) per far funzionare lo scorrimento
          this.setState({ movies: data.Search, isLoading: false });
        } else {
          this.setState({ isLoading: false, isError: true });
        }
      })
      .catch((err) => {
        console.error("Errore fetch:", err);
        this.setState({ isLoading: false, isError: true });
      });
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    // Dividiamo i film in gruppi da 6 per ogni slide del carosello
    const movieChunks = chunkArray(this.state.movies, 6);

    return (
      <div className="mt-4 px-4">
        <h4 className="mb-3">{this.props.title}</h4>

        {/* Gestione Loader */}
        {this.state.isLoading && (
          <div className="text-center my-4">
            <Spinner animation="border" variant="danger" />
          </div>
        )}

        {/* Gestione Errore */}
        {this.state.isError && <Alert variant="danger">Impossibile caricare i film per "{this.props.title}".</Alert>}

        {/* Carosello Multi-item */}
        {!this.state.isLoading && !this.state.isError && (
          <Carousel indicators={false} interval={null} className="movie-carousel">
            {movieChunks.map((chunk, index) => (
              <Carousel.Item key={index}>
                {/* Aggiungiamo justify-content-start per allineare a sinistra come l'originale */}
                <Row className="g-2 flex-nowrap justify-content-start mx-0">
                  {chunk.map((movie) => (
                    <Col key={movie.imdbID} xs={6} md={3} lg={2} className="px-1">
                      <img
                        className="img-fluid movie-poster w-100"
                        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image"}
                        alt={movie.Title}
                        style={{ height: "350px", objectFit: "cover" }}
                      />
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        )}
      </div>
    );
  }
}

export default MovieGallery;
