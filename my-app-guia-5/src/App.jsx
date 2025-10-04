import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function CienficosCartas({ cientificos }) { 
  return (
    <div className="scientist-card">
      <h2>{cientificos.name}</h2>
      
      <div className="card-content">
        <img
          src={cientificos.image}
          alt={`Foto de ${cientificos.name}`}
          className="scientist-photo"
        />
        
        <ul>
          <li>
             <a>Profesion: </a>{cientificos.profession}
          </li>
          <li>
            <a>Premios:</a>  {cientificos.awards} {cientificos.awardsList}
          </li>
          <li>
            <a>Descubrio:</a> {cientificos.discovery}
          </li>
        </ul>
      </div>
    </div>
  );
}

const DatosCientificos =[
  {
    id: 1,
    name: 'Maria Skłodowska-Curie',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Marie_Curie_%281900%29.jpg', // URL de imagen de ejemplo
    profession: 'física y química',
    awards: 4,
    awardsList: '(Premio Nobel de Física, Premio Nobel de Química, Medalla Davy, Medalla Matteucci)',
    discovery: 'polonio (elemento químico)'
  },
  {
    id: 2,
    name: 'Katsuko Saruhashi',
    image: 'https://i.imgur.com/OKS67lh.jpg', // URL de imagen de ejemplo
    profession: 'geoquímica',
    awards: 2,
    awardsList: '(Premio Miyake de geoquímica, Premio Tanaka)',
    discovery: 'un método para medir el dióxido de carbono en el agua de mar'
  },
];

function App() {
  return (
    <>
      <h1>Cientificos Notables</h1>
      {/* Recorro o mapeo todo de DatosCientificos*/}
      <section className="scientists-list">
        {DatosCientificos.map(cientificos => (
          <CienficosCartas 
            key={cientificos.id} 
            cientificos={cientificos} 
          />
        ))}
      </section>      
    </>
  );
}

export default App