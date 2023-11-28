function App(){

  return (
    <>

      <Header />
      <Main />
      <Gallery/>
      <Footer />

    </>
  );
}

function Header(){
  return <h2>BREATHE YOUR LIFE INTO ME</h2>
}

function Main(){
  return <h2>Hell ye</h2>
}

function Footer(){
  return <h2>DEAN Dre Ordo Nez&copy; Yes</h2>
}

function Gallery(){
  return(
      <>
      <HornedBeast title="DIABLO" imageUrl="./img/D_I_A_B_L_O.jpg" description="A being so evil he has a whole franchise named after him."/>
      <HornedBeast title="DIABLO" imageUrl="./img/D_I_A_B_L_O.jpg" description="A being so evil he has a whole franchise named after him."/>
      </>
  );
}

function HornedBeast(props){

  return (
    <div>
      <h2>{props.title}</h2>
      <img src={props.imageUrl} alt={props.title}/>
      <p>{props.description}</p>
    </div>
  );
}


export default App;