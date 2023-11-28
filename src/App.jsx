import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Music from "./components/Music";

function App(){

  return (
    <>

      <Header />
      <Music />
      <Main />
      <Gallery/>
      <Footer />

    </>
  );
}

function Main(){
  return <h2>Hell ye</h2>
}


export default App;