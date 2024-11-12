import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import Filter from './components/Filter'
import Ordering from './components/Ordering'
import SearchBar from './components/SearchBar'
import SidebarMenu from './components/SidebarMenu'
import ICard from './interfaces/ICard';

function App() {

  const [dados, setDados] = useState<ICard[]>([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes')
      .then(resposta => resposta.json())
      .then(inf => setDados(inf));
  }, []);

  return (
    <div className='container'>
      <SidebarMenu />
      <div>
        <SearchBar />
        <Filter />
        <Ordering />
        <ul className='list-card'>
          {dados ? dados.map((item, index) => (
            <li key={index}>
              <Card
                card={item}
              />
            </li>
          )) : null}
        </ul>
      </div>
    </div>
  )
}

export default App
