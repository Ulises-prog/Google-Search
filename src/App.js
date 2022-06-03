import React from 'react';
import Button from './components/Button';
import  Icon  from './components/Icon';
import './App.css';
import googlelogo from './img/google-logo.png'
import  googleMic from './img/google-mic.png'
import lupa from './img/lupa.png'

function App() {
const lang = window.location.pathname  //si estamos posicionados en un pais X 

  return (
    <div className="App">
      <section>
        <div className='logo_wrp'>
          <img src={googlelogo} alt="" />
          <span>
            {lang === '/es' ? 'España' : lang === '/ar' ? 'Argentina' : 'Global!' }
          </span>
        </div>
        <div>

          <form action =""> 
            <div className='search_wpr'>
              <input type="text" className='search_field' />
              <Icon imgSrc={googleMic} iconStyling='icon--right' />
              <Icon imgSrc={lupa} iconStyling = 'icon--left'/>
            </div>
            <div>
              <Button title=" Buscar en google"/>
              <Button title = "Me siento con suerte"/>
            </div>
            <p>Ofrecido por Google en: {lang === '/es' ? <span>español</span> : lang === '/ar' ? <span>español argentino</span> : <span>Global!</span>}</p>
        </form>

        </div>
      </section>
     
    </div>
  );
}

export default App;
