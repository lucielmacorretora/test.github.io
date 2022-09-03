import React, { useState } from 'react';
import './App.css';
import Carousel from './components/carousel'
import Menu from './components/menu'

function App() {
  const [imgs, setimgs] = useState([
    {
      id: '0',
      alt: 'Learn React',
      link: 'https://images.adsttc.com/media/images/613f/df13/8580/2b01/6405/340e/newsletter/whatsapp-image-2021-02-09-at-10-9.jpg?1631575834',
    },
    {
      id: '1',
      alt: 'Start to learn React',
      link: 'https://cdn-motorshow-ssl.akamaized.net/wp-content/uploads/sites/2/2019/11/novo-onix-premier-20-1024x580.jpg'
    },
    {
      id: '2',
      alt: 'Paisagem',
      link: 'https://img-21.ccm2.net/PkaZDNxdEAAPe5nx_394Q1bLgm4=/500x/5319836089a8425fb2f2e9977cd4a04e/ccm-faq/fotosfocate_unsplash.jpg'
    }
  ]);

  return (
    <div>
      <Menu />
      <h1>TEST</h1>
      <Carousel imgs={imgs} />
    </div>
  );
}

export default App;