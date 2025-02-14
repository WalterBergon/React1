import './App.css';
import './components/ItemCard/ItemCard';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';


function App() {

  return (
    <>
      <Navbar />
      <ItemListContainer mensaje="Bienvenido, comprate algo Cheee!" />
      // de algun lado lo tenia que enviar
      <Footer />

    </>
  )
}

export default App
