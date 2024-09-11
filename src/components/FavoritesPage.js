
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from './favoritesSlice';
import './fav.css';

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites.items);
  const dispatch = useDispatch();

  return (
    <div className='favves' style={{ padding: '20px' }}>
      <h2>Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        <ul>
          {favorites.map(movie => (
            <li className="card" key={movie.id}>
  <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} className="card-img-top" alt={movie.title} />

<div className='nnm' style={{backgroundColor:'black'}}>
    <h6 className="card-title" >{movie.title}</h6>
              <button className="btn btn-primary" style={{marginBottom:"20px"}} onClick={() => dispatch(removeFavorite(movie))}>
                Remove
              </button>
              </div>

            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesPage;
