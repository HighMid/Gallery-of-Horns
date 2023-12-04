import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from './components/SelectedBeast';
import Header from "./components/Header";
import Main from './components/HornFilter';
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Music from "./components/Music";
import Container from "react-bootstrap/Container";
import data from "./data.json";
import { useState } from 'react';

function App(){

  const [beastData, setbeastData] = useState(data);
  const [selectBeast, setSelectBeast] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isAlternateLayout, setIsAlternateLayout] = useState(false);

  const updateSelectedCard = (beast) => {
    setSelectBeast(beast);
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  const hornFilter = (horns) => {
    const filteredData = data.filter(beast => beast.horns === parseInt(horns, 10));
    setbeastData(filteredData);
  }

  const clearFilter = () =>{
    setbeastData(data);
  }

  const alternateLayout = () =>{
    setIsAlternateLayout(!isAlternateLayout);
  }

  return (
    <Container>

      <Header title="Gallery of Galleries" alternateLayout={alternateLayout}/>
      <Music />
      <Main onFilter={hornFilter} onClearFilter={clearFilter}/>
      <Gallery data={beastData} useAlternate={isAlternateLayout} updateSelectedCard={updateSelectedCard}/>
      <SelectedBeast data={selectBeast} useAlternate={isAlternateLayout} show={showModal} close={closeModal}/>
      <Footer copyright="DEAN Dre Ordo Nez&copy; Yes"/>

    </Container>
  );
}




export default App;