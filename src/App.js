import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      
      <NavBar />
      
      <Routes>
       
        <Route path='/' element={ <ItemListContainer greeting={'hola mundo'}/> }/>

      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
