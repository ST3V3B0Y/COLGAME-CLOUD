// import React from 'react';

function Home() {
  return (
    <div className="home-container bg-gray-100 min-h-screen flex flex-col justify-between">
      <nav className="navbar flex items-center p-4 bg-white shadow-md">
        <div className="ColGameLogo item-start mr-auto">
          <img src="#" alt="ColGameLogo" />
        </div>
        <ul className="nav-links flex space-x-6">
          <li><a href="#Inicio">Inicio</a></li>
          <li><a href="#Juegos">Juegos</a></li>
          <li><a href="#Soporte">Soporte</a></li>
        </ul>
      </nav>
      <header className="header-container w-max h-full bg-green-500">
        <h1>Bienvenido a ColGame Cloud</h1>
        <div className="div-buttonInicio">
          <button className="btnInicio border-0 hover:text-white">Inicio</button>
          <button>Empezar tour</button> 
        </div>
      </header>
      <div className="section-juegos" id="juegos">
        <h2 className="">Explora los juegos</h2>
        <div className="game-cards">
          <div className="game-card">
            <h3>Juego 1</h3>
            <p>Descripción del Juego 1</p>
          </div>
          <div className="game-card">
            <h3>Juego 2</h3>
            <p>Descripción del Juego 2</p>
          </div>
          <div className="game-card">
            <h3>Juego 3</h3>
            <p>Descripción del Juego 3</p>
          </div>
        </div>
      </div>
      <footer className="footer" id="soporte">
        <p className="m-auto"><a href="#">Soporte</a> | <a href="#">Términos y condiciones</a>  | <a href="#">Política de privacidad</a> </p>
        <p className="m-auto">&copy; 2025 ColGame Cloud. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default Home;