import React,{Fragment} from 'react';
import  './styles/styles.scss';
import Curso from './Curso.jsx'

const App= () => (
  <Fragment>
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img 
            className="main-banner__img"
            alt="banner"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQguvyPRu43l9WLX6aFvWFaxDpsNbXjhCV2Fm2v5w-6NILceStK" />
          
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Cursos de EDTeam</p>
            <p> Tu futuro te eseta esperando</p>
            <a href="https://ed.team.com" className="button">Suscribirse</a>
          </div>
        </div>
      </div>
    </div>

    <div className="ed-grid m-grid-3">
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
      <Curso />
    </div>
</Fragment>

)

export default App;
