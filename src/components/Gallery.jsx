import HornedBeast from './HornedBeast';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

function Gallery(props){
    return(
        <div>
            <h2>{props.data.title}</h2>
            <Container>

                <Row>
                    {props.data.map(
                        beast => (
                        <Col key={beast._id} md={4}>
                        <HornedBeast 
                            imgUrl={beast.image_url}
                            altImg={beast.alternative_images}
                            title={beast.title}
                            description={beast.description}
                            keyword={beast.keyword}
                            horns={beast.horns}
                            useAlternate={props.useAlternate}
                            onClick={() => props.updateSelectedCard(beast)}
                            />
                        </Col>
                    ))
                    }

                </Row>
            </Container>
        </div>
    );
}

export default Gallery;