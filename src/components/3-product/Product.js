// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../favoritesSlice';
import { useLanguage } from '../LanguageContext';
import './product.css';
import { motion } from 'framer-motion';
import List from './List';

function ProductList() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { language } = useLanguage();
  const favorites = useSelector((state) => state.favorites.items);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=f09fb963d3e394d1aed39bb062b0eaa2&language=${language}`);
        const data = await response.json();
        setMovies(data.results);
        setLoading(false);
      } catch (err) {
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchMovies();
  }, [language]);

  // Filter products based on the search query
  const filteredMovies = movies.filter(movie => 
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Check if a movie is in favorites
  const isFavorite = (movie) => favorites.some(fav => fav.id === movie.id);

  const toggleFavorite = (movie) => {
    if (isFavorite(movie)) {
      dispatch(removeFavorite(movie));
    } else {
      dispatch(addFavorite(movie));
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="ProductList">
      <input 
        type="text" 
        placeholder="Search by title..." 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
      />

      <div className="container">
        <div className="row">
          {filteredMovies.map((movie) => (
            <motion.div
              layout
              animate={{ transform: "scale(1)" }}
              initial={{ transform: "scale(0)" }}
              transition={{ type: "spring", damping: 8 }}
              className="col-3"
              key={movie.id}
            >
              <List product={movie} />
              <button 
                onClick={() => toggleFavorite(movie)} 
                style={{ 
                  background: isFavorite(movie) ? 'gold' : 'white' , 
                  border: '1px solid gold', 
                  cursor: 'pointer',
                  position: 'relative',
                  padding: '5px',
                  top: '-45px'
                }}
              >
                {isFavorite(movie) ? '★' : '☆'} {/* Filled or bordered star */}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
