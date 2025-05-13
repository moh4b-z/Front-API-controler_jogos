import React from 'react';
import './GameCard.css'; // CSS separado para facilitar o controle visual

const GameCard = ({ jogo }) => {
  return (
    <a className="game-card" href={jogo.link} target="_blank" rel="noopener noreferrer">
      <div className="game-card-image">
        <img
          src={jogo.foto_capa || '/images/placeholder-cover.png'}
          alt={`Capa de ${jogo.nome}`}
        />
      </div>
      <div className="game-card-info">
        <span className="game-card-tag">Jogo base</span>
        <h3 className="game-card-title">{jogo.nome}</h3>
        <p className="game-card-price">R$ 199</p>
      </div>
    </a>
  );
};

export default GameCard;
