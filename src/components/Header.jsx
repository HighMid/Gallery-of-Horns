import Navbar from 'react-bootstrap/Navbar'


function Header(props){
    return(
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <h1>{props.title}</h1>
      </Navbar.Brand>
      <img
        src="/img/Bonfire.webp"
        alt="Bonfire"
        onClick={props.alternateLayout}
        style={{cursor: 'pointer'}}
      />      
    </Navbar>
    );
  }

  export default Header;