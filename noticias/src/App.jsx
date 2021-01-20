import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  // Definir categoria y noticias
  const [ categoria, guardarCategoria ] = useState('');
  const [ noticias, guardarNoticias ] = useState([]);
  
  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=68dc5f5ae16d4c86b3c4e9c0b5ade642`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria]) 

  return (
    <Fragment>
        <Header 
          titulo='Buscador de Noticias'
        />

        <div className="container white">
            <Formulario 
              guardarCategoria={guardarCategoria}
            />

            <ListadoNoticias 
              noticias={noticias}
            />
        </div>
    </Fragment>
  );
}

export default App;