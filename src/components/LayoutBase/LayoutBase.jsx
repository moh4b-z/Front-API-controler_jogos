import React from 'react'
import './LayoutBase.css'
import  {useAuth} from '../../contexts/AuthContext'
import  GamePostCard from '../GamePostCard/GamePostCard'

const LayoutBase = ({ children }) => {
  const { user } = useAuth()
  return (
    <div className="layout">
      <header>
        <div className="header-left">
          <div className="logo">Controler Jogos</div>
          <nav className="nav">
            <span>Publicar</span>
          </nav>
        </div>
        <div className="header-right">
          <button className="btn">Entrar</button>
          <button className="btn blue">Cadrastrar</button>
        </div>
      </header>


      <main className="main-content">
        <nav className="menu-navegacao">
            <input placeholder="Pesquisar loja" />
            <div className="menu-options">
            <button>Descobrir</button>
            <button>Navegar</button>
            <button>Novidades</button>
            </div>
        </nav>
        {children}
      </main>
    </div>
  );
};

export default LayoutBase
