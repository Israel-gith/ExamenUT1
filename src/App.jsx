import React from "react"
import './App.css'
import Noticia from './components/Noticia';

const App = () => {

  const noticias = [
    {
      id: 1,
      avatar: '../Imagenes_examenUT1/avatar01.png',
      altavt:'Avtar1',
      fecha: '02/02/2022',
      titulo: 'Titulo1',
      nombre: 'Juan Pérez en Suecia',
      imagen: '../Imagenes_examenUT1/sky.jpg',
      altimg: 'Juan sonriendo',
      testimonio: 'Desde que implementamos React, el rendimiento mejoró notablemente. Los hooks han simplificado mucho el manejo del estado, reduciendo la complejidad del código y permitiéndonos entregar proyectos con mayor rapidez y eficiencia.' 
    },
    {
      id: 2,
      avatar: '../Imagenes_examenUT1/avatar02.png',
      altavt:'Avtar2',
      fecha: '12/05/2024',
      titulo: 'Titulo2',
      nombre: 'Juan Pérez en Suecia',
      imagen: '../Imagenes_examenUT1/sea.jpg',
      alt: 'Juan sonriendo',
      testimonio: 'Desde que implementamos React, el rendimiento mejoró notablemente. Los hooks han simplificado mucho el manejo del estado, reduciendo la complejidad del código y permitiéndonos entregar proyectos con mayor rapidez y eficiencia.'
   
    },
    {
      id: 3,
      avatar: '../Imagenes_examenUT1/avatar03.png',
      altavt:'Avtar3',
      fecha: '26/12/2013',
      titulo: 'Titulo3',
      nombre: 'Juan Pérez en Suecia',
      imagen: '../Imagenes_examenUT1/tux.jpg',
      alt: 'Juan sonriendo',
      testimonio: 'Desde que implementamos React, el rendimiento mejoró notablemente. Los hooks han simplificado mucho el manejo del estado, reduciendo la complejidad del código y permitiéndonos entregar proyectos con mayor rapidez y eficiencia.'
   
    },
    {
      id: 4,
      avatar: '../Imagenes_examenUT1/avatar04.png',
      altavt:'Avtar4',
      fecha: '22/09/2023',
      titulo: 'Titulo4',
      nombre: 'Juan Pérez en Suecia',
      imagen: '../Imagenes_examenUT1/mario.jpg',
      alt: 'Juan sonriendo',
      testimonio: 'Desde que implementamos React, el rendimiento mejoró notablemente. Los hooks han simplificado mucho el manejo del estado, reduciendo la complejidad del código y permitiéndonos entregar proyectos con mayor rapidez y eficiencia.'
   
    }
  ];

  return (
   <>
        {noticias.map((noticia) => (
          <Noticia
            key={noticia.id}
            avatar={noticia.avatar}
            altavt={noticia.altavt}
            fecha={noticia.fecha}
            titulo={noticia.titulo}
            nombre={noticia.nombre}
            imagen={noticia.imagen}
            altimg={noticia.altimg}
            testimonio={noticia.testimonio}
          />
        ))}
      </>
  );
};

export default App;