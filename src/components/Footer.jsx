import Navbar from 'react-bootstrap/Navbar'

function Footer(props){
  
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <h2>{props.copyright}</h2>
        </Navbar.Brand>
        
      </Navbar>
    
    )
  }

  export default Footer;