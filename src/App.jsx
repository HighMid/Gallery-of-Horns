import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Music from "./components/Music";
import Beasts from "./components/Beasts"
import Container from "react-bootstrap/Container";
import ImgStuff from "./data.json";

function App(){

  return (
    <Container>

      <Header title="Gallery of Galleries"/>
      <Music />
      <Beasts message="Make Your Beast..." ImgStuff={ImgStuff}/>
      <Main />
      <Gallery/>
      <Footer copyright="DEAN Dre Ordo Nez&copy; Yes"/>

    </Container>
  );
}

function Main(){
  return <h2>Hell ye</h2>
}


export default App;