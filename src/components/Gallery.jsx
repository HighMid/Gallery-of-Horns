import HornedBeast from './HornedBeast';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

function Gallery(props){
    return(
        <div>
            <h2>{props.message}</h2>
            <Container>

                <Row>
                    {props.ImgStuff.map((beast, index) => (
                        <Col key={beast._id} md={4}>
                        <HornedBeast ImgStuff={beast.image_url}/>
                        </Col>
                    ))};

                </Row>
                
            </Container>
        </div>
    );
}

export default Gallery;