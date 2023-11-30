import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from './components/SelectedBeast';
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Music from "./components/Music";
// import Beasts from "./components/Beasts"
import Container from "react-bootstrap/Container";
import data from "./data.json";
import { useState } from 'react';

function App(){

  const [beastData, setbeastData] = useState(data);
  const [selectBeast, setSelectBeast] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const updateSelectedCard = (beast) => {
    setSelectBeast(beast);
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <Container>

      <Header title="Gallery of Galleries"/>
      <Music />
      {/* <Beasts message="Make Your Beast..." data={data}/> */}
      <Main />
      <Gallery data={beastData} updateSelectedCard={updateSelectedCard}/>
      <SelectedBeast data={selectBeast} show={showModal} close={closeModal}/>
      <Footer copyright="DEAN Dre Ordo Nez&copy; Yes"/>

    </Container>
  );
}

function Main(){
  return <h2>Hell ye</h2>
}


export default App;