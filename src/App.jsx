import React, { useState, useMemo, useEffect } from 'react';
import { Search, Heart, Film, Star, TrendingUp, Clock, Grid, Moon, Sun, Info, X } from 'lucide-react';

const MOCK_MOVIES = [
  {
    imdbID: "tt21103218",
    Title: "The Lost Bus",
    Year: "2025",
    Rated: "R",
    Released: "2025-10-03",
    Runtime: "129 min",
    Genre: "Biography, Drama, History",
    Director: "Various",
    imdbRating: "8.3",
    Poster: "https://m.media-amazon.com/images/M/MV5BZTIzNmQzYzUtNTdlNi00NmY5LThmNTYtMGFmZjUxMTgzOGNmXkEyXkFqcGc@.jpg",
    Plot: "A wayward school bus driver and a dedicated school teacher battle to save 22 children from a terrifying inferno."
  },
  {
    imdbID: "tt27706593",
    Title: "The Rivals of Amziah King",
    Year: "2025",
    Rated: "G",
    Released: "2025-03-10",
    Runtime: "130 min",
    Genre: "Crime, Drama, Thriller",
    Director: "Various",
    imdbRating: "8.4",
    Poster: "https://m.media-amazon.com/images/M/MV5BODRhMTczNjgtMDcwNi00MDljLTkxN2ItYTFjOGJlMmIxY2U5XkEyXkFqcGc@.jpg",
    Plot: "Kateri loses her mother, leaves foster care. Reunites with former foster parent Amziah who mentors her, revealing hidden skills."
  },
  {
    imdbID: "tt27590028",
    Title: "The Oscars",
    Year: "2024",
    Rated: "TV-14",
    Released: "2024-03-10",
    Runtime: "157 min",
    Genre: "Comedy, Music, Reality-TV",
    Director: "Jimmy Kimmel",
    imdbRating: "6.7",
    Poster: "https://m.media-amazon.com/images/M/MV5BOWQyNDA5NzYtODFlMi00MmQwLTlmYTMtYjI4NmYwYWNmMjYwXkEyXkFqcGc@.jpg",
    Plot: "The 96th Academy Awards, held on March 10th, 2024 from the Dolby Theatre in Hollywood."
  },
  {
    imdbID: "tt10814036",
    Title: "Agent Elvis",
    Year: "2023",
    Rated: "TV-MA",
    Released: "2023-03-17",
    Runtime: "30 min",
    Genre: "Action, Animation, Comedy",
    Director: "Titmouse",
    imdbRating: "6.8",
    Poster: "https://m.media-amazon.com/images/M/MV5BYzEyYWM4ZjYtMDQxOC00Mjg0LTg2MDYtYmI5Zjk5ZjNiNmM1XkEyXkFqcGc@.jpg",
    Plot: "Elvis trades in his jumpsuit for a jetpack when he joins a secret government spy program to help battle dark forces."
  },
  {
    imdbID: "tt29580199",
    Title: "Unsolved Mysteries: Behind the Legacy",
    Year: "2023",
    Rated: "PG",
    Released: "2023-10-05",
    Runtime: "55 min",
    Genre: "Reality-TV",
    Director: "Various",
    imdbRating: "7.3",
    Poster: "https://m.media-amazon.com/images/M/MV5BYWFkYTdkNmMtNGJlMS00ZWY1LWFmY2MtMjQxYTU1Y2FjZThiXkEyXkFqcGc@.jpg",
    Plot: "A tribute to the iconic series that shaped future generations of true crime TV, featuring interviews and exclusive footage."
  },
  {
    imdbID: "tt18967390",
    Title: "Deep in the Heart: A Texas Wildlife Story",
    Year: "2022",
    Rated: "PG",
    Released: "2022-06-03",
    Runtime: "101 min",
    Genre: "Documentary",
    Director: "Fin & Fur Films",
    imdbRating: "7.6",
    Poster: "https://m.media-amazon.com/images/M/MV5BODgyN2Y2ZjItMDIyNy00YTZlLWE3MDItMmMzZmM0MmYxYWZkXkEyXkFqcGc@.jpg",
    Plot: "A visually stunning celebration of what makes Texas unique, its diverse landscapes and remarkable wildlife behavior."
  },
  {
    imdbID: "tt6467266",
    Title: "Sing 2",
    Year: "2021",
    Rated: "PG",
    Released: "2021-12-22",
    Runtime: "110 min",
    Genre: "Adventure, Animation, Comedy",
    Director: "Garth Jennings",
    imdbRating: "7.3",
    Poster: "https://m.media-amazon.com/images/M/MV5BNzZkZmMzNzItYzBhOS00ZGEwLWFiNWYtMWRjNzM4MjRjZTRjXkEyXkFqcGc@.jpg",
    Plot: "Buster Moon and his friends must persuade reclusive rock star Clay Calloway to join them for the opening of a new show."
  },
  {
    imdbID: "tt8367814",
    Title: "The Gentlemen",
    Year: "2019",
    Rated: "R",
    Released: "2020-01-24",
    Runtime: "113 min",
    Genre: "Action, Crime",
    Director: "Guy Ritchie",
    imdbRating: "7.8",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjE2ZjQ4ZGMtZjFhMi00NmI5LTliNjEtODczMWMxNjliZjgxXkEyXkFqcGc@.jpg",
    Plot: "An American expat tries to sell off his highly profitable marijuana empire in London, triggering plots and schemes."
  },
  {
    imdbID: "tt1800302",
    Title: "Gold",
    Year: "2016",
    Rated: "R",
    Released: "2017-01-27",
    Runtime: "120 min",
    Genre: "Biography, Crime, Drama",
    Director: "Stephen Gaghan",
    imdbRating: "6.7",
    Poster: "https://m.media-amazon.com/images/M/MV5BNzI1NjI5OTUyM15BMl5BanBnXkFtZTgwOTM4NzY2MDI@.jpg",
    Plot: "Kenny Wells, a prospector desperate for a lucky break, teams up with a geologist to find gold in the uncharted jungle of Indonesia."
  },
  {
    imdbID: "tt0816692",
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "2014-11-07",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    imdbRating: "8.7",
    Poster: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@.jpg",
    Plot: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot is tasked to pilot a spacecraft to find a new planet."
  },
  {
    imdbID: "tt0993846",
    Title: "The Wolf of Wall Street",
    Year: "2013",
    Rated: "R",
    Released: "2013-12-25",
    Runtime: "180 min",
    Genre: "Biography, Comedy, Crime",
    Director: "Martin Scorsese",
    imdbRating: "8.2",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@.jpg",
    Plot: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker to his fall involving crime and corruption."
  },
  {
    imdbID: "tt1935179",
    Title: "Mud",
    Year: "2012",
    Rated: "PG-13",
    Released: "2013-05-10",
    Runtime: "130 min",
    Genre: "Adventure, Drama",
    Director: "Jeff Nichols",
    imdbRating: "7.4",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTU2MzcyODgyNV5BMl5BanBnXkFtZTcwNTc4MDYwOQ@@.jpg",
    Plot: "Two young boys encounter a fugitive and form a pact to help him evade vigilantes and reunite with his true love."
  }
];

const GENRES = ["All", "Action", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "History", "Music", "Reality-TV", "Sci-Fi", "Thriller"];

function App() {
  const [movies, setMovies] = useState(MOCK_MOVIES);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeGenre, setActiveGenre] = useState('All');
  const [sortBy, setSortBy] = useState('Year'); // 'Year' or 'Rating'
  const [favorites, setFavorites] = useState([]);
  const [theme, setTheme] = useState('dark');
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Apply Theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Milestone 3 Features: Searching, Filtering, Sorting (Higher-Order Functions)
  const processedMovies = useMemo(() => {
    let result = [...movies];

    // Searching
    if (searchQuery) {
      result = result.filter(m => 
        m.Title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filtering
    if (activeGenre !== 'All') {
      result = result.filter(m => m.Genre.includes(activeGenre));
    }

    // Sorting
    result.sort((a, b) => {
      if (sortBy === 'Year') {
        return parseInt(b.Year) - parseInt(a.Year);
      } else {
        return parseFloat(b.imdbRating) - parseFloat(a.imdbRating);
      }
    });

    return result;
  }, [movies, searchQuery, activeGenre, sortBy]);

  const toggleFavorite = (e, id) => {
    e.stopPropagation();
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]
    );
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="nexus-logo" onClick={() => {setSearchQuery(''); setActiveGenre('All')}}>Nexus Movies</div>
        
        <div className="search-bar">
          <Search size={18} className="search-icon" />
          <input 
            type="text" 
            className="search-input" 
            placeholder="Search for movies, actors, directors..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="header-actions">
          <button className="action-btn" onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <div className="action-btn" title="Your Favorites">
             <Heart size={20} fill={favorites.length > 0 ? "#e50914" : "none"} color={favorites.length > 0 ? "#e50914" : "currentColor"} />
          </div>
        </div>
      </header>

      <main className="main-content">
        {/* Sidebar Filters */}
        <aside className="sidebar">
          <div className="sidebar-section">
            <h3 className="section-title">Browse Genres</h3>
            <div className="filter-list">
              {GENRES.map(genre => (
                <div 
                  key={genre} 
                  className={`filter-item ${activeGenre === genre ? 'active' : ''}`}
                  onClick={() => setActiveGenre(genre)}
                >
                  {genre}
                </div>
              ))}
            </div>
          </div>

          <div className="sidebar-section">
            <h3 className="section-title">Order By</h3>
            <div className="filter-list">
              <div 
                className={`filter-item ${sortBy === 'Year' ? 'active' : ''}`}
                onClick={() => setSortBy('Year')}
              >
                <Clock size={16} /> Latest Releases
              </div>
              <div 
                className={`filter-item ${sortBy === 'Rating' ? 'active' : ''}`}
                onClick={() => setSortBy('Rating')}
              >
                <Star size={16} /> Top Rated (IMDb)
              </div>
            </div>
          </div>
        </aside>

        {/* Movie Grid */}
        <div className="movie-grid">
          {processedMovies.length > 0 ? (
            processedMovies.map(movie => (
              <div key={movie.imdbID} className="movie-card" onClick={() => setSelectedMovie(movie)}>
                <div className="poster-wrapper">
                  <img src={movie.Poster} alt={movie.Title} className="poster-img" />
                  <div className="rating-badge">{movie.imdbRating}</div>
                  <button 
                    className={`favorite-btn ${favorites.includes(movie.imdbID) ? 'active' : ''}`}
                    onClick={(e) => toggleFavorite(e, movie.imdbID)}
                  >
                    <Heart size={16} fill={favorites.includes(movie.imdbID) ? "currentColor" : "none"} />
                  </button>
                  <div className="card-overlay">
                    <span style={{fontSize: '11px', color: 'rgba(255,255,255,0.7)'}}>{movie.Rated}</span>
                  </div>
                </div>
                <div className="movie-info">
                  <h4 className="movie-title">{movie.Title}</h4>
                  <div className="movie-meta">
                    <span>{movie.Year}</span>
                    <span>•</span>
                    <span>{movie.Genre.split(',')[0]}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="empty-state">
              <Film size={48} />
              <p>No movies found matching your request.</p>
              <button className="login-btn" style={{width: 'auto', padding: '10px 20px'}} onClick={() => {setSearchQuery(''); setActiveGenre('All')}}>
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Movie Details Modal */}
      {selectedMovie && (
        <div className="login-screen" style={{zIndex: 1000}} onClick={() => setSelectedMovie(null)}>
          <div className="login-card" style={{width: '800px', display: 'flex', gap: '30px', padding: '30px'}} onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedMovie(null)}
              style={{position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)'}}
            >
              <X size={24} />
            </button>
            <img 
              src={selectedMovie.Poster} 
              alt={selectedMovie.Title} 
              style={{width: '260px', borderRadius: '12px', boxShadow: 'var(--card-shadow)'}} 
            />
            <div style={{flex: 1}}>
              <h2 style={{fontSize: '32px', marginBottom: '8px', color: 'var(--text)'}}>{selectedMovie.Title}</h2>
              <div className="movie-meta" style={{marginBottom: '20px', fontSize: '14px'}}>
                <span style={{color: 'var(--accent2)'}}><Star size={14} fill="currentColor" style={{marginRight: '4px'}}/>{selectedMovie.imdbRating}</span>
                <span>{selectedMovie.Year}</span>
                <span>{selectedMovie.Runtime}</span>
                <span style={{border: '1px solid var(--border)', padding: '2px 6px', borderRadius: '4px', fontSize: '11px'}}>{selectedMovie.Rated}</span>
              </div>
              <p style={{color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '20px'}}>{selectedMovie.Plot}</p>
              <div style={{display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px'}}>
                 <div><strong>Director:</strong> <span style={{color: 'var(--text-muted)'}}>{selectedMovie.Director}</span></div>
                 <div><strong>Genres:</strong> <span style={{color: 'var(--text-muted)'}}>{selectedMovie.Genre}</span></div>
              </div>
              <button className="login-btn" style={{marginTop: '30px'}} onClick={() => alert(`Redirecting to watch ${selectedMovie.Title}...`)}>
                Watch Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
