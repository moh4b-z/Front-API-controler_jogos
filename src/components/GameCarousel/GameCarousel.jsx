import React from 'react';
import './GameCarousel.css';
import GameCard from '../GameCard/GameCard';

const GameCarousel = ({ jogos, titulo }) => {
  return (
    <div className="carousel-container">
      {titulo && <h2 className="carousel-title">{titulo}</h2>}
      <div className="carousel-track">
        {jogos.map((jogo) => (
          <GameCard key={jogo.id} jogo={jogo} />
        ))}
      </div>
    </div>
  );
};

export default GameCarousel;
