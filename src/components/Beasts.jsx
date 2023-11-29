import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'

function Beasts(props){
    return(
        <div>
            <h2>{props.message}</h2>
            <Container>
                <Row>
                    {props.ImgStuff.map((beast, index) => (
                        <Col key={beast._id} md={4}>
                        <BeastImage ImgStuff={beast.image_url}/>
                        </Col>
                    ))};

                </Row>
                
            </Container>
        </div>
    );
}

function BeastImage(props){
    return(
        <div>
            <Image src={props.ImgStuff} alt="Hell yeah" rounded fluid></Image>
        </div>
        
    );
}

export default Beasts;