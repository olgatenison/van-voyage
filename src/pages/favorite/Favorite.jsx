import React from 'react';
import { useSelector } from 'react-redux';

const Favorite = () => {
  const favorites = useSelector(state => state.favorites);
  return (
    <>
      <div>
        <h2>Favorite</h2>
        <ul>
          {favorites.map(van => (
            <li key={van.id}>{van.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Favorite;
